import {
  Component,
  ElementRef,
  HostListener, Inject,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { BoardModel } from '../../models/board.model';
import { TaskBoundingInfoModel } from '../../models/task-bounding-info.model';
import { ListModel } from '../../models/list.model';
import { BoardStoreService } from '../../services/board-store.service';
import { combineLatest } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { ReactiveComponent } from '../../tools/reactive';
import { RoutingService } from '../../services/routing.service';
import { CalculationService } from '../../services/calculation.service';
import { EEvenType } from '../../enums/even-type.enum';
import { DOCUMENT } from '@angular/common';
import { getIdFromAttribute } from '../../tools/html-element.tools';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [`
    .board {
      height: calc(100vh - 3.5rem);
    }

    .list-placeholder {
      width: calc(100% - .85rem);
    }

    .min-width-230px {
      min-width: 230px;
    }

    ngx-simplebar {
      height: inherit;
    }
  `]
})
export class BoardComponent extends ReactiveComponent implements OnInit, OnDestroy {

  options = { autoHide: false };
  selectedBoard: BoardModel;
  selectedTaskData: TaskModel;
  currentIndex: number;
  currentTaskIndex = 0;
  draggedListIndex: number | null = null;
  newListOrderIndex = 0;
  targetTask: HTMLElement = null;
  targetList: HTMLElement = null;
  taskPositionsByOrder: TaskBoundingInfoModel[] = [];

  isAddingList = false;
  isDraggingTask = false;
  isDraggingList = false;
  isDraggingBoard = false;
  @ViewChild('FakeTask') fakeTask: ElementRef;
  @ViewChild('board') boardRef: ElementRef;
  scrollContainerRef: any;
  mouseStartingX: number;
  scrollSpeed = 10;
  previousListsLength = 0;

  @ViewChildren('ListContainer')
  lists: QueryList<ElementRef>;

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private readonly boardStoreService: BoardStoreService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly calculationService: CalculationService,
    private readonly routingService: RoutingService
  ) {
    super();
    this.mouseStartingX = null;
    this.selectedBoard = null;
    this.currentIndex = null;
    this.scrollContainerRef = null;
  }

  ngOnInit(): void {
    combineLatest([this.activatedRoute.params, this.boardStoreService.boards$.pipe(filter(isNotNullOrUndefined))]).pipe(this.takeUntil()).subscribe(([{ id }, boards]) => {
      const board = boards.find(({ id: boardId }) => boardId === id);
      if (board === undefined) {
        this.routingService.routeToNotFound();
      }
      this.boardStoreService.selectBoard(board);
    });

    this.boardStoreService.selectedBoard$.pipe(
      filter((board: BoardModel) => isNotNullOrUndefined(board)),
      this.takeUntil()
    ).subscribe((board: BoardModel) => {
      this.selectedBoard = board;
      const interval = setInterval(() => {
        // console.log('initListHandlers', this.lists.toArray());
        const length = this.lists.toArray().length;
        this.handleListChanges(length, this.lists);

        if (length === this.selectedBoard.lists.length) {
          clearInterval(interval);
        }
      }, 50);
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.boardStoreService.selectBoard(null);
  }

  initListChangesHandler(): void {
    // this.lists.changes.pipe(this.takeUntil()).subscribe(
    //   (list: QueryList<ListComponent>) => {
    //     this.handleListChanges(list.length, this.previousListsLength, list);
    //   }
    // );
  }

  handleListChanges(currentLength: number, list: QueryList<ElementRef>): void {
    const previousLength = this.previousListsLength;
    this.previousListsLength = currentLength;
    const listsHtmlElems: HTMLElement[] = list.toArray().map(({nativeElement}) => nativeElement);
    this.calculationService.calculateBoundingInfo(listsHtmlElems);

    if (previousLength === 0) {
      console.log('[list changes init all lists]');
      listsHtmlElems.forEach((element: HTMLElement) => this.initListEventListeners(element));
      this.calculationService.calculateBoundingInfo(listsHtmlElems);
      return;
    }

    if (currentLength <= previousLength) {
      console.log('[list changes calculate new bounding info]');
      this.calculationService.calculateBoundingInfo(listsHtmlElems);
      return;
    }

    if (currentLength > previousLength) {
      console.log('[list changes init last list]');
      this.initListEventListeners(listsHtmlElems[listsHtmlElems.length - 1]);
      return;
    }
  }

  initListEventListeners(element: HTMLElement): void {
    element.addEventListener(EEvenType.mousedown, (event: MouseEvent) => this.listMouseDown(element, event));
  }

  listMouseDown(element: HTMLElement, mouseDownEvent: MouseEvent): void {
    const listId = getIdFromAttribute(element);
    this.draggedListIndex = this.selectedBoard.lists.findIndex(({ id }) => id === listId);
    console.log('[list mouse down]', this.previousListsLength, this.draggedListIndex);
    const controller = new AbortController();
    const { signal } = controller;
    this.document.addEventListener(EEvenType.mousemove, this.listMouseMove.bind(this, element), { signal });
    this.document.addEventListener(EEvenType.mouseup, this.listMouseUp.bind(this, element, controller), { signal });

    // element.style.position = 'fixed';
  }

  listMouseMove(element: HTMLElement, event: MouseEvent): void {
    console.log('[list mouse move]', this.previousListsLength, event);
    // element.style.top = `${event.clientY}px`;
    // element.style.left = `${event.clientX}px`;
    //
    //     this.newListOrderIndex = this.findListIndexByMouseX(event.clientX);
    //     if (this.newListOrderIndex !== this.currentListIndex) {
    //       const currentList = this.selectedBoard.lists[this.currentListIndex];
    //
    //       // switch neighbouring lists
    //       this.selectedBoard.lists[this.currentListIndex] = this.selectedBoard.lists[this.newListOrderIndex];
    //       this.selectedBoard.lists[this.newListOrderIndex] = currentList;
    //
    //       this.currentListIndex = this.newListOrderIndex;
    //     }
  }

  listMouseUp(element: HTMLElement, controller: AbortController, event: MouseEvent): void {
    console.log('[list mouse up]', element, event);
    controller.abort();
    this.draggedListIndex = null;
    // this.isDraggingList = false;
    //
    //     this.targetList.style.removeProperty('position');
    //     this.targetList.style.removeProperty('top');
    //     this.targetList.style.removeProperty('left');
    //     this.targetList.style.height = 'auto';
    //
    //     this.targetList.parentElement.style.background = 'none';
    //     this.targetList.parentElement.style.height = 'auto';
    //
    //     this.targetList = null;
  }
  // taskMouseDown(event: MouseEvent): void {
  //   this.isDraggingTask = true;
  //   this.targetTask = targetElement;
  //
  //   if (targetElement.classList.contains('task-title')) {
  //     this.targetTask = targetElement.parentElement;
  //   }
  //
  //   const targetTaskId = this.targetTask.getAttribute('id');
  //   this.selectedTaskData = this.getTaskDataById(targetTaskId);
  //   this.currentListIndex = this.selectedBoard.lists.findIndex(list => list.tasks.findIndex(({ id }) => id === targetTaskId) !== -1);
  //   this.currentTaskIndex = this.selectedBoard.lists[this.currentListIndex].tasks.findIndex(({ id }) => id === targetTaskId);
  //
  //   this.selectedBoard.lists[this.currentListIndex].tasks[this.currentTaskIndex].selected = true;
  // }
  //
  // boardMouseDown(event: MouseEvent): void {
  //   this.isDraggingBoard = true;
  //   this.mouseStartingX = event.clientX;
  // }
  //
  // @HostListener('document:mousemove', ['$event'])
  // drag(event): void {
  //   if (this.isDraggingTask) {
  //
  //     // set fake task's position
  //     this.fakeTask.nativeElement.style.top = `${event.clientY}px`;
  //     this.fakeTask.nativeElement.style.left = `${event.clientX}px`;
  //
  //     const newListIndex = this.findListIndexByMouseX(event.clientX);
  //     const newTaskIndex = this.findTaskIndexByMouseY(event.clientY, newListIndex);
  //
  //     const currentList = this.selectedBoard.lists[this.currentListIndex];
  //     const newList = this.selectedBoard.lists[newListIndex];
  //
  //     // if list is the same
  //     if (newListIndex === this.currentListIndex) {
  //       // if task position is new
  //       if (newTaskIndex !== this.currentTaskIndex) {
  //         const id = this.selectedTaskData.id;
  //         const currentTask = currentList.tasks[this.currentTaskIndex];
  //         currentList.tasks[this.currentTaskIndex] = currentList.tasks[newTaskIndex];
  //         currentList.tasks[newTaskIndex] = currentTask;
  //
  //         this.currentTaskIndex = newTaskIndex;
  //
  //         this.calculateBoundingInfo();
  //
  //         // next line refreshes reference to the correct object !IMPORTANT
  //         this.selectedTaskData = this.getTaskDataById(id);
  //       }
  //     }
  //     // if list is different
  //     else {
  //       const id = this.selectedTaskData.id;
  //
  //       // delete old task, and add new task
  //       newList.tasks.splice(newTaskIndex, 0, this.selectedTaskData);
  //       // next line deletes the object that selectedTaskData is pointing to !IMPORTANT
  //       currentList.tasks.splice(this.currentTaskIndex, 1);
  //
  //       this.currentListIndex = newListIndex;
  //       this.currentTaskIndex = newTaskIndex;
  //
  //       this.calculateBoundingInfo();
  //       this.taskCleanup(id, this.selectedBoard.lists[newListIndex].id);
  //
  //       // next line refreshes reference to the correct object !IMPORTANT
  //       this.selectedTaskData = this.getTaskDataById(id);
  //     }
  //   }
  //   if (this.isDraggingBoard) {
  //     this.scrollContainerRef.scrollLeft -= (event.clientX - this.mouseStartingX) / this.scrollSpeed;
  //   }
  // }
  //
  // @HostListener('mouseup')
  // endDrag(): void {
  //   if (this.targetTask !== null) {
  //     this.isDraggingTask = false;
  //     this.targetTask = null;
  //     this.selectedTaskData = null;
  //     this.listsBoundingInfo = [];
  //
  //     // deselect all tasks
  //     this.selectedBoard.lists.forEach(list => list.tasks.forEach(task => {
  //       if (task !== undefined) {
  //         task.selected = false;
  //       }
  //     }));
  //   }
  //
  //   if (this.selectedBoard !== null) {
  //     this.isDraggingBoard = false;
  //     this.mouseStartingX = null;
  //   }
  //
  //   // calculate board bounding info
  //   this.calculateBoundingInfo();

  // }

  @HostListener('document:wheel', ['$event'])
  onScroll(event): void {
    if (!this.scrollContainerRef && this.selectedBoard) {
      this.scrollContainerRef = this.boardRef.nativeElement.firstChild.firstChild.children[1].firstChild.firstChild;
    }

    const target = event.target;

    if (target && target.classList === this.scrollContainerRef.classList) {
      this.scrollContainerRef.scrollLeft += event.deltaY / -1.6;
    }
  }

  findListIndexByMouseX(clientX: number): number {
    if (!this.calculationService.listsBoundingInfo || this.calculationService.listsBoundingInfo.length === 0) {
      return 0;
    }

    const index = this.calculationService.listsBoundingInfo.findIndex(list => clientX >= list.x && clientX <= list.right);
    const first = this.calculationService.listsBoundingInfo[0];
    const last = this.calculationService.listsBoundingInfo[this.calculationService.listsBoundingInfo.length - 1];

    if (clientX > last.right) {
      return this.calculationService.listsBoundingInfo.length - 1;
    }

    if (clientX < first.x) {
      return 0;
    }

    return index === -1 ? 0 : index;
  }

  findTaskIndexByMouseY(clientY: number, listIndex: number): number {
    if (!this.calculationService.listsBoundingInfo || this.calculationService.listsBoundingInfo.length === 0) {
      return 0;
    }

    const taskBoundsInfo = this.calculationService.listsBoundingInfo[listIndex].tasksBoundingInfo;

    if (!taskBoundsInfo || taskBoundsInfo.length === 0) {
      return 0;
    }

    const first = taskBoundsInfo[0];
    const last = taskBoundsInfo[taskBoundsInfo.length - 1];
    const selectedListIndex = this.findListIndexByTaskId(this.selectedTaskData.id);

    if (!first || !last || clientY < first.y) {
      return 0;
    }

    if (clientY > last.bottom) {
      if (taskBoundsInfo.length === 1 && last.id !== this.selectedTaskData.id) {
        return 1;
      }
      return taskBoundsInfo.length - (selectedListIndex === listIndex ? 1 : 0);
    }

    let index = 0;
    for (let i = 0; i < taskBoundsInfo.length; i++) {
      if (clientY >= taskBoundsInfo[i].y) {
        index = i;
      }
    }

    return index;
  }

  findListIndexByTaskId(id: string): number | null {
    for (let i = 0; i < this.selectedBoard.lists.length; i++) {
      for (const task of this.selectedBoard.lists[i].tasks) {
        if (task !== undefined && task.id === id) {
          return i;
        }
      }
    }
    return null;
  }

  getTaskDataById(id: string): TaskModel {
    for (const list of this.selectedBoard.lists) {
      for (const task of list.tasks) {
        if (task !== undefined && task.id === id) {
          return task;
        }
      }
    }
    return null;
  }

  taskCleanup(taskId: string, listId: string) {
    this.selectedBoard.lists.forEach(list => {
      if (list.id !== listId) {
        list.tasks = list.tasks.filter(task => task.id !== taskId);
      }
    });
  }

  removeList(index): void {
    this.selectedBoard.lists.splice(index, 1);
  }

  pushToArray(text: string): void {
    this.selectedBoard.lists.push(new ListModel(text));
  }
}

