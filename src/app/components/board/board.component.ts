import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { BoardModel } from '../../models/BoardModel';
import { TaskBoundingInfo } from '../../models/TaskBoundingInfo';
import { ListModel } from '../../models/ListModel';
import { ControlPanelService } from '../../services/control-panel.service';
import { DataService } from '../../services/data-service.service';
import {ListBoundingInfo} from '../../models/ListBoundingInfo';
import {BoardStoreService} from '../../services/board-store.service';
import {Subscription} from 'rxjs';
import {TaskModel} from '../../models/TaskModel';
import {SimplebarAngularComponent} from 'simplebar-angular';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {
  options = { autoHide: false};
  selectedBoard: BoardModel;
  boards: BoardModel[];
  selectedTaskData: TaskModel;

  currentIndex: number;

  currentTaskIndex = 0;
  newTaskIndex = 1;
  currentListIndex = 0;
  newListOrderIndex = 0;

  newListTitle = '';

  targetTask: HTMLElement = null;
  targetList: HTMLElement = null;
  taskPositionsByOrder: TaskBoundingInfo[];

  // This holds bounding positions and uuids of all lists and tasks
  listsBoundingInfo: ListBoundingInfo[];

  isAddingList: boolean;
  isDraggingTask = false;
  isDraggingList = false;

  subscription: Subscription;

  @ViewChild('fakeTask') fakeTask: ElementRef;

  constructor(
    private readonly controlPanelService: ControlPanelService,
    private readonly dataService: DataService,
    private readonly boardStoreService: BoardStoreService,
  ) {
    this.isAddingList = false;
    this.selectedBoard = null;
    this.currentIndex = null;
    this.taskPositionsByOrder = [];
    this.listsBoundingInfo = [];
    this.boards = [];

    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(this.boardStoreService.selectedBoard$.subscribe(board => this.selectedBoard = board));
    this.subscription.add(this.boardStoreService.boards$.subscribe(data => {
      this.boards = data;

      // Testing, exclusively for disabling title screen
      if (this.boards.length > 0) {
        this.boardStoreService.setSelectedBoard(this.boards[0]);
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('mousedown', ['$event.target'])
  startDrag(targetElement: HTMLElement): void {
    document.body.style.userSelect = 'none';
    if (!this.listsBoundingInfo.length) {
      this.calculateBoundingInfo();
    }

    if (targetElement.classList.contains('task') || targetElement.classList.contains('task-title')) {
      this.isDraggingTask = true;
      this.targetTask = targetElement;

      if (targetElement.classList.contains('task-title')) {
        this.targetTask = targetElement.parentElement;
      }

      const targetTaskUuid = this.targetTask.getAttribute('uuid');
      this.selectedTaskData = this.getTaskDataByUuid(targetTaskUuid);
      this.currentListIndex = this.selectedBoard.lists.findIndex(list => list.tasks.findIndex(task => task.uuid === targetTaskUuid) !== -1);
      this.currentTaskIndex = this.selectedBoard.lists[this.currentListIndex].tasks.findIndex(task => task.uuid === targetTaskUuid);

      this.selectedBoard.lists[this.currentListIndex].tasks[this.currentTaskIndex].selected = true;
    }
    else if (targetElement.classList.contains('list-header') || targetElement.classList.contains('list-title')) {
      this.isDraggingList = true;
      this.targetList = targetElement.parentElement.parentElement;

      if (targetElement.classList.contains('list-title')) {
        this.targetList = this.targetList.parentElement;
      }

      this.targetList.style.position = 'fixed';

      const uuid = this.targetList.getAttribute('uuid');
      this.currentListIndex = this.selectedBoard.lists.findIndex(list => list.uuid === uuid);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event): void {
    if (this.isDraggingTask) {

      // set fake task's position
      this.fakeTask.nativeElement.style.top = `${event.clientY}px`;
      this.fakeTask.nativeElement.style.left = `${event.clientX}px`;

      const newListIndex = this.findListIndexByMouseX(event.clientX);
      const newTaskIndex = this.findTaskIndexByMouseY(event.clientY, newListIndex);

      const currentList = this.selectedBoard.lists[this.currentListIndex];
      const newList = this.selectedBoard.lists[newListIndex];

      // if list is the same
      if (newListIndex === this.currentListIndex) {
        // if task position is new
        if (newTaskIndex !== this.currentTaskIndex) {
          const uuid = this.selectedTaskData.uuid;
          const currentTask = currentList.tasks[this.currentTaskIndex];
          currentList.tasks[this.currentTaskIndex] = currentList.tasks[newTaskIndex];
          currentList.tasks[newTaskIndex] = currentTask;

          this.currentTaskIndex = newTaskIndex;

          this.calculateBoundingInfo();

          // next line refreshes reference to the correct object !IMPORTANT
          this.selectedTaskData = this.getTaskDataByUuid(uuid);
        }
      }
      // if list is different
      else {
        const uuid = this.selectedTaskData.uuid;

        // delete old task, and add new task
        newList.tasks.splice(newTaskIndex, 0, this.selectedTaskData);
        // next line deletes the object that selectedTaskData is pointing to !IMPORTANT
        currentList.tasks.splice(this.currentTaskIndex, 1);

        this.currentListIndex = newListIndex;
        this.currentTaskIndex = newTaskIndex;

        this.calculateBoundingInfo();
        this.taskCleanup(uuid, this.selectedBoard.lists[newListIndex].uuid);

        // next line refreshes reference to the correct object !IMPORTANT
        this.selectedTaskData = this.getTaskDataByUuid(uuid);
      }
    }

    if (this.isDraggingList) {
      this.targetList.style.top = `${event.clientY}px`;
      this.targetList.style.left = `${event.clientX}px`;

      this.newListOrderIndex = this.findListIndexByMouseX(event.clientX);
      if (this.newListOrderIndex !== this.currentListIndex) {
        const currentList = this.selectedBoard.lists[this.currentListIndex];

        // switch neighbouring lists
        this.selectedBoard.lists[this.currentListIndex] = this.selectedBoard.lists[this.newListOrderIndex];
        this.selectedBoard.lists[this.newListOrderIndex] = currentList;

        this.currentListIndex = this.newListOrderIndex;
      }
    }
  }

  @HostListener('mouseup')
  endDrag(): void {
    document.body.style.userSelect = 'all';
    if (this.targetTask !== null) {
      this.isDraggingTask = false;
      this.targetTask = null;
      this.selectedTaskData = null;
      this.listsBoundingInfo = [];

      // deselect all tasks
      this.selectedBoard.lists.forEach(list => list.tasks.forEach(task => {
        if (task !== undefined) {
          task.selected = false;
        }
      }));
    }

    if (this.targetList !== null) {
      this.isDraggingList = false;

      this.targetList.style.removeProperty('position');
      this.targetList.style.removeProperty('top');
      this.targetList.style.removeProperty('left');
      this.targetList.style.height = 'auto';

      this.targetList.parentElement.style.background = 'none';
      this.targetList.parentElement.style.height = 'auto';

      this.targetList = null;
    }

    // calculate board bounding info
    this.calculateBoundingInfo();
  }

  // TODO
  // @HostListener('document:wheel', ['$event'])
  // onScroll(event): void {
  //   console.log('scroll', event);
  // }
  //
  // @HostListener('document:mousedown', ['$event'])
  // onBoardStartDrag(event): void {
  //   console.log('mousedown', event);
  // }
  //
  // @HostListener('document:mousemove', ['$event'])
  // onBoardDrag(event): void {
  //   console.log('mousemove', event);
  // }

  findListIndexByMouseX(clientX: number): number {
    if (!this.listsBoundingInfo || this.listsBoundingInfo.length === 0) {
      return 0;
    }

    const index = this.listsBoundingInfo.findIndex( list => clientX >= list.x && clientX <= list.right);
    const first = this.listsBoundingInfo[0];
    const last = this.listsBoundingInfo[this.listsBoundingInfo.length - 1];

    if (clientX > last.right) {
      return this.listsBoundingInfo.length - 1;
    }

    if (clientX < first.x) {
      return 0;
    }

    return index === -1 ? 0 : index;
  }

  findTaskIndexByMouseY(clientY: number, listIndex: number): number {
    if (!this.listsBoundingInfo || this.listsBoundingInfo.length === 0) {
      return 0;
    }

    const taskBoundsInfo = this.listsBoundingInfo[listIndex].tasksBoundingInfo;

    if (!taskBoundsInfo || taskBoundsInfo.length === 0) {
      return 0;
    }

    const first = taskBoundsInfo[0];
    const last = taskBoundsInfo[taskBoundsInfo.length - 1];
    const selectedListIndex = this.findListIndexByTaskUuid(this.selectedTaskData.uuid);

    if (!first || !last || clientY < first.y) {
      return 0;
    }

    if (clientY > last.bottom) {
      if (taskBoundsInfo.length === 1 && last.uuid !== this.selectedTaskData.uuid) {
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

  findListIndexByTaskUuid(uuid) {
    for (let i = 0; i < this.selectedBoard.lists.length; i++) {
      for (const task of this.selectedBoard.lists[i].tasks) {
        if (task !== undefined && task.uuid === uuid) {
          return i;
        }
      }
    }
    return null;
  }

  getTaskDataByUuid(uuid: string): TaskModel {
    for (const list of this.selectedBoard.lists) {
      for (const task of list.tasks) {
        if (task !== undefined && task.uuid === uuid) {
          return task;
        }
      }
    }
    return null;
  }

  taskCleanup(taskUuid: string, listUuid: string) {
    this.selectedBoard.lists.forEach(list => {
      if (list.uuid !== listUuid) {
        list.tasks = list.tasks.filter(task => task.uuid !== taskUuid);
      }
    });
  }

  removeList(index): void {
    this.selectedBoard.lists.splice(index, 1);
  }

  pushToArray(text: string): void {
    this.selectedBoard.lists.push(new ListModel(text));
  }

  loadBoard(uuid: string): void {
    this.boardStoreService.setBoards(this.boards);
    this.boardStoreService.setSelectedBoard(this.boards.find(b => b.uuid === uuid));
  }

  createBoard(): void {
    this.boards.push(new BoardModel('New Board'));
    this.boardStoreService.setBoards(this.boards);
    this.boardStoreService.setSelectedBoard(this.boards[this.boards.length - 1]);
  }

  calculateBoundingInfo() {
    this.listsBoundingInfo = [];
    const listElements = Array.from(document.querySelectorAll('div.list-placeholder'));

    listElements.forEach((list, i) => {
      const boundingRect = list.getBoundingClientRect();
      this.listsBoundingInfo.push(new ListBoundingInfo(boundingRect.x, boundingRect.y, boundingRect.bottom, boundingRect.right, list.getAttribute('uuid')));

      const taskElements = Array.from(list.querySelectorAll('div.task-container'));
      taskElements.forEach(ref => {
        const holder = ref.getBoundingClientRect();
        this.listsBoundingInfo[i].tasksBoundingInfo.push(new TaskBoundingInfo(holder.x, holder.y, holder.bottom, holder.right, ref.getAttribute('uuid')));
      });
    });
  }
}
