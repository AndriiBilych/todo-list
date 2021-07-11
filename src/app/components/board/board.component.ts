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
  // listTasksRefs: Element[];
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
    // this.listTasksRefs = null;
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

  modelChange(event) {
    console.log('change', event);
  }

  @HostListener('document:mousedown', ['$event.target'])
  startDrag(targetElement: HTMLElement): void {
    document.body.style.userSelect = 'none';
    if (!this.listsBoundingInfo.length) {
      this.calculateBoundingInfo();
    }
    // console.log('boundingInfo', this.listsBoundingInfo);

    if (targetElement.classList.contains('task') || targetElement.classList.contains('task-title')) {
      this.isDraggingTask = true;
      this.targetTask = targetElement;

      if (targetElement.classList.contains('task-title')) {
        this.targetTask = targetElement.parentElement;
      }

      // this.targetTask.style.position = 'fixed';
      // this.targetTask.style.minWidth = '150px';

      // this.targetTask.parentElement.style.height = '30px';
      // this.targetTask.parentElement.style.backgroundColor = 'var(--highlightedColor)';

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

      this.fakeTask.nativeElement.style.top = `${event.clientY}px`;
      this.fakeTask.nativeElement.style.left = `${event.clientX}px`;

      // console.log(this.findListIndexByMouseX(event.clientX));
      const newListIndex = this.findListIndexByMouseX(event.clientX);
      if (newListIndex !== this.currentListIndex){
        const currentBoard = this.selectedBoard;
        const currentList = currentBoard.lists[this.currentListIndex];
        const newList = currentBoard.lists[newListIndex];

        newList.tasks.push(currentList.tasks[this.currentTaskIndex]);
        // currentList.tasks[this.currentTaskIndex].listId = currentBoard.lists[newListIndex].id;
        currentList.tasks.splice(this.currentTaskIndex, 1);

        this.currentListIndex = newListIndex;
        this.currentTaskIndex = newList.tasks.length - 1;

        this.targetTask = this.findTaskElementByUuid(this.targetTask.getAttribute('uuid')) as HTMLElement;

        // console.log(this.targetTask);
        // console.log(this.targetTask.parentElement);

        // this.targetTask.style.top = `${event.clientY}px`;
        // this.targetTask.style.left = `${event.clientX}px`;
        // this.targetTask.parentElement.style.height = '30px';
        // this.targetTask.parentElement.style.backgroundColor = 'var(--highlightedColor)';
        // this.isDraggingTask = !this.isDraggingTask;
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
        const currentBoard = this.boards[this.currentIndex];
        const currentList = currentBoard.lists[this.currentListIndex];
        // const listElementHolder = this.getListElementByOrderIndex(this.newListOrderIndex);
        // const newOrderIndex = listElementHolder.getAttribute('order-index');

        currentBoard.lists[this.currentListIndex] = currentBoard.lists[this.newListOrderIndex];
        // listElementHolder.setAttribute('order-index', this.targetList.parentElement.getAttribute('order-index'));

        currentBoard.lists[this.newListOrderIndex] = currentList;
        // this.targetList.parentElement.setAttribute('order-index', newOrderIndex);

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
      this.deselectAllTasks();
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

  deselectAllTasks() {
    this.selectedBoard.lists.forEach(list => list.tasks.forEach(task => task.selected = false));
  }

  pushToArray(text: string): void {
    this.boards[this.currentIndex].lists.push(new ListModel(text, this.boards[this.currentIndex].lists.length));
  }

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

  removeList(num): void {
    this.boards[this.currentIndex].lists.splice(num, 1);
    for (let i = 0; i < this.boards[this.currentIndex].lists.length; i++) {
      this.boards[this.currentIndex].lists[i].order = i;
    }
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

  findTaskElementByUuid(uuid: string) {
    const tasks = Array.from(document.querySelectorAll('div.task-container'));
    return tasks.find(task => task.getAttribute('uuid') === uuid);
  }
}
