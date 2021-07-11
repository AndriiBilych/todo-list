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
  listsRefs: Element[];

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

  @HostListener('document:mousedown', ['$event.target'])
  startDrag(targetElement: HTMLElement): void {
    if (!this.listsBoundingInfo.length) {
      this.calculateBoundingInfo();
    }

    if (targetElement.classList.contains('task') || targetElement.classList.contains('task-title')) {
      document.body.style.userSelect = 'none';
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
      document.body.style.userSelect = 'none';
      this.isDraggingList = true;
      this.targetList = targetElement.parentElement.parentElement;

      if (targetElement.classList.contains('list-title')) {
        this.targetList = targetElement.parentElement.parentElement.parentElement;
      }

      this.targetList.style.position = 'fixed';

      this.currentListIndex = Number(this.targetList.parentElement.getAttribute('order-index'));
      this.listsRefs = Array.from(document.querySelectorAll('div.list-placeholder'));

      this.listsRefs.forEach(list => {
        const boundingRect = list.getBoundingClientRect();
        this.listsBoundingInfo.push(new ListBoundingInfo(boundingRect.x, boundingRect.y, list.id));
      });
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event): void {
    if (this.isDraggingTask) {

      // set fake task's position
      this.fakeTask.nativeElement.style.top = `${event.clientY}px`;
      this.fakeTask.nativeElement.style.left = `${event.clientX}px`;

      const newListIndex = this.findListIndexByMouseX(event.clientX);
      if (newListIndex !== this.currentListIndex){
        const currentBoard = this.selectedBoard;
        const currentList = currentBoard.lists[this.currentListIndex];
        const newList = currentBoard.lists[newListIndex];

        // delete old task, and add new task
        newList.tasks.push(currentList.tasks[this.currentTaskIndex]);
        currentList.tasks.splice(this.currentTaskIndex, 1);

        this.currentListIndex = newListIndex;
        this.currentTaskIndex = newList.tasks.length - 1;
      }
      // else
      // if (!this.isDraggingList) {
      //   debugger;
      //   this.newTaskIndex = this.findTaskIndex(event, newListIndex);
      //   if (this.newTaskIndex !== null && this.draggedTaskIndex !== null && this.newTaskIndex !== this.draggedTaskIndex) {
      //     const draggedTask = this.boards[this.currentIndex].lists[this.currentListIndex].tasks[this.draggedTaskIndex];
      //     // const taskElementHolder = this.getTaskElementByOrderIndex(this.newTaskIndex);
      //     // const newOrderIndex = taskElementHolder.getAttribute('order-index');
      //     const currentList = this.boards[this.currentIndex].lists[this.currentListIndex];
      //
      //     currentList.tasks[this.draggedTaskIndex] = currentList.tasks[this.newTaskIndex];
      //     // taskElementHolder.setAttribute('order-index', this.targetTask.getAttribute('order-index'));
      //
      //     currentList.tasks[this.newTaskIndex] = draggedTask;
      //     // this.targetTask.setAttribute('order-index', newOrderIndex);
      //
      //     this.draggedTaskIndex = this.newTaskIndex;
      //   }
      // }
    }

    if (this.isDraggingList) {
      this.targetList.style.top = `${event.clientY}px`;
      this.targetList.style.left = `${event.clientX}px`;

      this.newListOrderIndex = this.listsBoundingInfo.findIndex( list => event.clientX > list.x);
      if (this.newListOrderIndex !== null && this.newListOrderIndex !== this.currentListIndex) {
        const currentList = this.selectedBoard.lists[this.currentListIndex];

        // switch neighbouring lists
        this.selectedBoard.lists[this.currentListIndex] = this.selectedBoard.lists[this.newListOrderIndex];
        this.selectedBoard.lists[this.newListOrderIndex] = currentList;

        this.currentListIndex = this.newListOrderIndex;
      }
    }
  }

  @HostListener('document:mouseup')
  endDrag(): void {
    document.body.style.userSelect = 'all';
    if (this.targetTask !== null) {
      this.isDraggingTask = false;
      this.targetTask = null;
      this.selectedTaskData = null;
      this.listsBoundingInfo = [];

      // deselect all tasks
      this.selectedBoard.lists.forEach(list => list.tasks.forEach(task => task.selected = false));
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
    const index = this.listsBoundingInfo.findIndex( list => clientX <= list.x) - 1;
    return index === -1 ? 0 : index;
  }

  getTaskDataByUuid(uuid: string): TaskModel {
    for (const list of this.selectedBoard.lists) {
      for (const task of list.tasks) {
        if (task.uuid === uuid) {
          return task;
        }
      }
    }
    return null;
  }

  // findTaskIndex(event, listOrderIndex): number {
  //   let holder = null;
  //   this.listsBoundingInfo[Number(listOrderIndex)].taskPositionsByOrder.forEach( (task) => {
  //     if (event.clientY > task.y) { holder = Number(task.uuid); }
  //   });
  //   return holder;
  // }

  // getTaskElementByOrderIndex(index: number): HTMLElement {
  //   for (let i = 0; i < this.listTasksRefs.length; i++) {
  //     if (Number(this.listTasksRefs[i].getAttribute('order-index')) === index) {
  //       return this.listTasksRefs[i] as HTMLElement;
  //     }
  //   }
  //   return null;
  // }

  // getListElementByOrderIndex(index: number): HTMLElement {
  //   for (let i = 0; i < this.listsRefs.length; i++) {
  //     if (Number(this.listsRefs[i].getAttribute('order-index')) === index) {
  //       return this.listsRefs[i] as HTMLElement;
  //     }
  //   }
  //   return null;
  // }

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

  calculateBoundingInfo() {
    this.listsBoundingInfo = [];
    const listElements = Array.from(document.querySelectorAll('div.list-placeholder'));

    listElements.forEach((list, i) => {
      const boundingRect = list.getBoundingClientRect();
      this.listsBoundingInfo.push(new ListBoundingInfo(boundingRect.x, boundingRect.y, list.getAttribute('uuid')));

      const taskElements = Array.from(list.querySelectorAll('div.task-container'));
      taskElements.forEach(ref => {
        const holder = ref.getBoundingClientRect();
        this.listsBoundingInfo[i].taskPositionsByOrder.push(new TaskBoundingInfo(holder.x, holder.y, ref.getAttribute('uuid')));
      });
    });
  }
}
