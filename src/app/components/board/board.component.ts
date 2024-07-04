import {
  Component,
  ElementRef,
  HostListener, inject,
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
import { ListDraggingService } from '../../services/list-dragging.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [`
    .board {
      height: calc(100vh - 3.5rem);
    }
  `]
})
export class BoardComponent extends ReactiveComponent implements OnInit, OnDestroy {

  selectedBoard: BoardModel;
  selectedTaskData: TaskModel;
  currentIndex: number;

  // currentTaskIndex = 0;
  // taskPositionsByOrder: TaskBoundingInfoModel[] = [];
  // targetTask: HTMLElement = null;

  isAddingList = false;
  isDraggingTask = false;
  // isDraggingBoard = false;
  @ViewChild('FakeTask') fakeTask: ElementRef;
  @ViewChild('board') boardRef: ElementRef;
  @ViewChild('ListAtMousePosition') listAtMousePosition: ElementRef;

  mouseStartingX: number;
  scrollSpeed = 10;
  #scrollLeft = 0;
  @ViewChildren(ListComponent)
  _lists: QueryList<ListComponent>;

  listDraggingService = inject(ListDraggingService);
  #calculationService = inject(CalculationService);

  constructor(
    private readonly boardStoreService: BoardStoreService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly routingService: RoutingService
  ) {
    super();
    this.mouseStartingX = null;
    this.selectedBoard = null;
    this.currentIndex = null;
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
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.boardStoreService.selectBoard(null);
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
  onWheel(event: any): void {
    const target = event?.target;

    if (target && target.isEqualNode(this.boardRef.nativeElement)) {
      this.calculateBoundingInfoForAll();
      window.scrollBy({ left: event.deltaY / -1.6 });
    }
  }

  @HostListener('document:mousedown')
  onMousedown(): void {
    this.#scrollLeft = window.scrollX;
  }

  @HostListener('document:mouseup')
  onMouseup(): void {
    if (window.scrollX !== this.#scrollLeft) {
      this.calculateBoundingInfoForAll();
    }
  }

  calculateBoundingInfoForAll(): void {
    this.lists.forEach((list: ListComponent) => list.calculateBoundingInfo());
  }

  findTaskIndexByMouseY(clientY: number, listIndex: number): number {
    if (!this.#calculationService.listsBoundingInfo || this.#calculationService.listsBoundingInfo.size === 0) {
      return 0;
    }

    const taskBoundsInfo = this.#calculationService.listsBoundingInfo[listIndex].tasksBoundingInfo;

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

  removeList(index: number): void {
    const removed = this.selectedBoard.lists.splice(index, 1);
    const length = this.lists.length;
    const interval = setInterval(() => {
      if (this.lists.length === length - 1) {
        this.#calculationService.removeBoundingInfo(removed[0].id);
        this.calculateBoundingInfoForAll();
        clearInterval(interval);
      }
    }, 50);
  }

  pushToArray(text: string): void {
    this.selectedBoard.lists.push(new ListModel(text));
  }

  private get lists(): ListComponent[] {
    return this._lists.toArray().filter(({ hidden }) => !hidden);
  }
}

