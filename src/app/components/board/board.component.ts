import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { BoardModel } from '../../models/BoardModel';
import { PositionIndex } from '../../models/PositionIndex';
import { ListModel } from '../../models/ListModel';
import { ControlPanelService } from '../../services/control-panel.service';
import { DataService } from '../../services/data-service.service';
import {PositionIndexList} from '../../models/PositionIndexList';
import {BoardStoreService} from '../../services/board-store.service';
import {Subscription} from 'rxjs';
import {CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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
  currentIndex: number;
  listTasksRefs: Element[];
  listsRefs: Element[];
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  draggedTaskIndex = '0';
  newTaskIndex = '1';
  currentListId = '0';
  currentListOrderIndex = '0';
  newListOrderIndex = '0';
  newListTitle = '';

  currentList: HTMLElement = null;
  targetTask: HTMLElement = null;
  targetList: HTMLElement = null;
  taskPositionsByOrder: PositionIndex[];
  listOfListsOfTaskPositions: PositionIndexList[];

  isAddingList: boolean;
  isDraggingTask = false;
  isDraggingList = false;

  subscription: Subscription;

  constructor(
    private readonly controlPanelService: ControlPanelService,
    private readonly dataService: DataService,
    private readonly boardStoreService: BoardStoreService
  ) {
    this.isAddingList = false;
    this.selectedBoard = null;
    this.currentIndex = 0;
    this.taskPositionsByOrder = [];
    this.listOfListsOfTaskPositions = [];
    this.listTasksRefs = null;
    this.boards = [];

    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(this.boardStoreService.selectedBoard$.subscribe(board => this.selectedBoard = board));
    this.subscription.add(this.boardStoreService.boards$.subscribe(data => this.boards = data));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('document:mousedown', ['$event.target'])
  startDrag(targetElement: HTMLElement): void {
    document.body.style.userSelect = 'none';
    if (targetElement.classList.contains('task') || targetElement.classList.contains('task_title')) {
      this.isDraggingTask = true;

      if (targetElement.classList.contains('task_title')) {
        this.targetTask = targetElement.parentElement;
      }
      else {
        this.targetTask = targetElement;
      }

      this.targetTask.style.position = 'fixed';
      this.targetTask.style.minWidth = '150px';

      this.targetTask.parentElement.style.height = '30px';
      this.targetTask.parentElement.style.backgroundColor = 'var(--darkColor)';

      this.draggedTaskIndex = this.targetTask.getAttribute('order-index');

      this.currentListId = this.targetTask.getAttribute('list-id');
      this.currentList = document.getElementById(this.currentListId);
      this.currentListOrderIndex = this.currentList.getAttribute('order-index');

      this.listTasksRefs = Array.from(this.currentList.querySelectorAll('div.task'));
      const listRefs = Array.from(document.querySelectorAll('div.list-placeholder'));

      listRefs.forEach((list, i) => {
        const taskRefs = Array.from(list.querySelectorAll('div.task'));
        const boundingRect = list.getBoundingClientRect();
        this.listOfListsOfTaskPositions.push(new PositionIndexList(list.id, list.getAttribute('order-index'), boundingRect.x, boundingRect.y));
        taskRefs.forEach(ref => {
          const holder = ref.getBoundingClientRect();
          this.listOfListsOfTaskPositions[i].taskPositionsByOrder.push(new PositionIndex(holder.x, holder.y, ref.getAttribute('order-index')));
        });
      });
    }
    else
    if (targetElement.classList.contains('list_header') || targetElement.classList.contains('list_title')) {
      this.isDraggingList = true;

      if (targetElement.classList.contains('list_title')) {
        this.targetList = targetElement.parentElement.parentElement.parentElement;
      }
      else {
        this.targetList = targetElement.parentElement.parentElement;
      }

      this.targetList.style.position = 'fixed';

      this.currentListOrderIndex = this.targetList.parentElement.getAttribute('order-index');
      this.listsRefs = Array.from(document.querySelectorAll('div.list-placeholder'));

      this.listsRefs.forEach(list => {
        const boundingRect = list.getBoundingClientRect();
        this.listOfListsOfTaskPositions.push(new PositionIndexList(list.id, list.getAttribute('order-index'), boundingRect.x, boundingRect.y));
      });
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event): void {
    if (this.isDraggingTask) {

      this.targetTask.style.top = `${event.clientY}px`;
      this.targetTask.style.left = `${event.clientX}px`;

      const newListIndex = this.findListIndex(event);
      if (newListIndex !== null && newListIndex !== this.currentListOrderIndex){
        this.boards[this.currentIndex].lists[newListIndex].tasks.push(this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)]);
        this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)].listId = this.boards[this.currentIndex].lists[newListIndex].id;
        this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks.splice(Number(this.draggedTaskIndex), 1);

        this.recalculateOrderIndices(this.currentListOrderIndex);
        this.recalculateOrderIndices(newListIndex);

        this.currentListOrderIndex = newListIndex;
        this.draggedTaskIndex = null;
        this.isDraggingTask = !this.isDraggingTask;
      }
      else if (!this.isDraggingList) {
        this.newTaskIndex = this.findTaskIndex(event, newListIndex);
        if (this.newTaskIndex !== null && this.draggedTaskIndex !== null && this.newTaskIndex !== this.draggedTaskIndex) {
          // tslint:disable-next-line:radix
          const taskHolder = this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)];
          const taskElementHolder = this.getTaskElementByOrderIndex(this.newTaskIndex);
          const newOrderIndex = taskElementHolder.getAttribute('order-index');

          this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)] = this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.newTaskIndex)];
          taskElementHolder.setAttribute('order-index', this.targetTask.getAttribute('order-index'));

          this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.newTaskIndex)] = taskHolder;
          this.targetTask.setAttribute('order-index', newOrderIndex);

          this.draggedTaskIndex = this.newTaskIndex;
        }
      }
    }

    if (this.isDraggingList) {
      this.targetList.style.top = `${event.clientY}px`;
      this.targetList.style.left = `${event.clientX}px`;

      this.newListOrderIndex = this.findListIndex(event);
      if (this.newListOrderIndex !== null && this.newListOrderIndex !== this.currentListOrderIndex) {
        const listHolder = this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)];
        const listElementHolder = this.getListElementByOrderIndex(this.newListOrderIndex);
        const newOrderIndex = listElementHolder.getAttribute('order-index');

        this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)] = this.boards[this.currentIndex].lists[Number(this.newListOrderIndex)];
        listElementHolder.setAttribute('order-index', this.targetList.parentElement.getAttribute('order-index'));

        this.boards[this.currentIndex].lists[Number(this.newListOrderIndex)] = listHolder;
        this.targetList.parentElement.setAttribute('order-index', newOrderIndex);

        this.currentListOrderIndex = this.newListOrderIndex;
      }
    }
  }

  @HostListener('document:mouseup')
  endDrag(): void {
    document.body.style.userSelect = 'all';
    if (this.targetTask !== null) {
      this.isDraggingTask = false;

      this.targetTask.style.removeProperty('position');
      this.targetTask.style.removeProperty('top');
      this.targetTask.style.removeProperty('left');
      this.targetTask.style.height = 'auto';

      this.targetTask.parentElement.style.background = 'none';
      this.targetTask.parentElement.style.height = 'auto';

      this.targetTask = null;
      this.listOfListsOfTaskPositions = [];
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

  // drop(event: CdkDragDrop<TaskModel[]>) {
  //   // console.log(event);
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  //   // moveItemInArray(array, event.previousIndex, event.currentIndex);
  // }


  // dragEnter(event: CdkDragEnter<TaskModel[]>) {
  //   // console.log(event);
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  //   // moveItemInArray(array, event.previousIndex, event.currentIndex);
  // }


  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  // }

  // dropList(array, event: CdkDragDrop<ListModel[]>) {
  //   console.log(event);
  //   // if (event.previousContainer === event.container) {
  //   //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   // } else {
  //   //   transferArrayItem(event.previousContainer.data,
  //   //     event.container.data,
  //   //     event.previousIndex,
  //   //     event.currentIndex);
  //   // }
  //   moveItemInArray(array, event.previousIndex, event.currentIndex);
  // }

  pushToArray(text: string): void {
    this.boards[this.currentIndex].lists.push(new ListModel(text, this.boards[this.currentIndex].lists.length));
  }

  findListIndex(event): string {
    let holder = null;
    this.listOfListsOfTaskPositions.forEach( (list) => {
      if (event.clientX > list.x) { holder = list.orderIndex; }
    });
    return holder;
  }

  findTaskIndex(event, listOrderIndex): string {
    let holder = '0';
    this.listOfListsOfTaskPositions[Number(listOrderIndex)].taskPositionsByOrder.forEach( (task) => {
      if (event.clientY > task.y) { holder = task.index; }
    });
    return holder;
  }

  recalculateOrderIndices(listOrderIndex): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.boards[this.currentIndex].lists[listOrderIndex].tasks.length; i++) {
      this.boards[this.currentIndex].lists[listOrderIndex].tasks[i].orderIndex = i;
    }
  }

  getTaskElementByOrderIndex(index: string): HTMLElement {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listTasksRefs.length; i++) {
      if (this.listTasksRefs[i].getAttribute('order-index') === index) {
        return this.listTasksRefs[i] as HTMLElement;
      }
    }
    return null;
  }

  getListElementByOrderIndex(index: string): HTMLElement {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listsRefs.length; i++) {
      if (this.listsRefs[i].getAttribute('order-index') === index) {
        return this.listsRefs[i] as HTMLElement;
      }
    }
    return null;
  }

  removeList(num): void {
    this.boards[this.currentIndex].lists.splice(num, 1);
    for (let i = 0; i < this.boards[this.currentIndex].lists.length; i++) {
      this.boards[this.currentIndex].lists[i].orderIndex = i;
    }
  }

  onClick(uuid: string): void {
    this.boardStoreService.setBoards(this.boards);
    this.boardStoreService.setSelectedBoard(this.boards.find(b => b.uuid === uuid));
  }
}
