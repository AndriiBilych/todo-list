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
import { ListModel } from '../../models/list.model';
import { BoardStoreService } from '../../services/board-store.service';
import { combineLatest } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { ReactiveComponent } from '../../tools/reactive';
import { RoutingService } from '../../services/routing.service';
import { CalculationService } from '../../services/calculation.service';
import { EEvenType } from '../../enums/even-type.enum';
import { DOCUMENT } from '@angular/common';
import { getIdFromAttribute } from '../../tools/html-element.tools';
import { IList } from '../../models/interfaces/list.interface';

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
  draggedListIndex: number | null = null;
  draggedListNewIndex: number | null = null;
  draggedListData: ListModel | null = null;
  draggedListVisual: IList | null = null;
  // currentTaskIndex = 0;
  // taskPositionsByOrder: TaskBoundingInfoModel[] = [];
  // targetTask: HTMLElement = null;
  shouldInsert = false;

  isAddingList = false;
  isDraggingTask = false;
  // isDraggingList = false;
  // isDraggingBoard = false;
  @ViewChild('FakeTask') fakeTask: ElementRef;
  @ViewChild('board') boardRef: ElementRef;
  @ViewChild('ListAtMousePosition') listAtMousePosition: ElementRef;
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
    combineLatest([
      this.activatedRoute.params,
      this.boardStoreService.boards$.pipe(
        filter(isNotNullOrUndefined),
        map((boards: BoardModel[] | null) => boards.map((board) => {
          board.lists.map((list: ListModel) => {
            list.id = 'list' + list.id;
            return list;
          });
          return board;
        })),
      )
    ]).pipe(this.takeUntil()).subscribe(([{ id }, boards]) => {
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
        const length = this.lists.toArray().length;
        if (length === this.selectedBoard.lists.length) {
          const elements = this.lists.toArray().map(({nativeElement}) => nativeElement);
          this.initListEventListeners(elements);
          this.initBoundingInfo(elements);
          clearInterval(interval);
        }
      }, 50);
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.boardStoreService.selectBoard(null);
  }

  initBoundingInfo(elements: HTMLElement[]): void {
      this.calculationService.calculateBoundingInfo(elements);
  }

  initListEventListeners(elements: HTMLElement[]): void {
    elements.forEach((element) => {
      element.addEventListener(
        EEvenType.mousedown,
        () => this.listMouseDown(element)
      );
    });
  }

  listMouseDown(element: HTMLElement): void {
    const listId = getIdFromAttribute(element);
    this.draggedListIndex = this.selectedBoard.lists.findIndex(({ id }) => id === listId);
    this.draggedListVisual = { ...this.selectedBoard.lists[this.draggedListIndex] };
    console.log('[list mouse down]', this.previousListsLength, this.draggedListIndex, this.lists.toArray());
    const controller = new AbortController();
    const { signal } = controller;
    this.document.addEventListener(EEvenType.mousemove, this.listMouseMove.bind(this), { signal });
    this.document.addEventListener(EEvenType.mouseup, this.listMouseUp.bind(this, controller), { signal });
  }

  listMouseMove(event: MouseEvent): void {
    const newIndex = this.findListIndexByMouseX(event.clientX);
    console.log('[list mouse move]', this.draggedListIndex, newIndex);
    if (this.draggedListIndex !== newIndex && !this.shouldInsert) {
      this.shouldInsert = true;
      this.draggedListData = this.selectedBoard.lists.splice(this.draggedListIndex, 1)[0];
    }
    this.draggedListNewIndex = newIndex;
    this.listAtMousePosition.nativeElement.style.left = `${event.clientX}px`;
    this.listAtMousePosition.nativeElement.style.top = `${event.clientY}px`;
  }

  listMouseUp(controller: AbortController, event: MouseEvent): void {
    console.log('[list mouse up]', event);
    controller.abort();
    if (this.shouldInsert) {
      this.selectedBoard.lists.splice(this.draggedListNewIndex, 0, this.draggedListData);
      this.shouldInsert = false;
      const interval = setInterval(() => {
        const elem = this.document.querySelector<HTMLElement>(`#${this.draggedListData.id}`);
        if (elem) {
          this.initListEventListeners([elem]);
          this.draggedListData = null;
          clearInterval(interval);
        }
      }, 50);
    }
    this.resetDraggingListStatus();
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

  private resetDraggingListStatus(): void {
    this.draggedListIndex = null;
    this.draggedListNewIndex = null;
    this.draggedListVisual = null;
    this.listAtMousePosition.nativeElement.style.removeProperty('top');
    this.listAtMousePosition.nativeElement.style.removeProperty('left');
  }

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

