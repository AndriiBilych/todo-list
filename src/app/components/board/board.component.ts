import { Component, HostListener, OnInit } from '@angular/core';
import { BoardModel } from '../../models/BoardModel';
import { PositionIndex } from '../../models/PositionIndex';
import { ListModel } from '../../models/ListModel';
import { ControlPanelService } from '../../services/control-panel.service';
import { DataService } from '../../services/data-service.service';
import { v4 as uuidv4 } from 'uuid';
import {PositionIndexList} from '../../models/PositionIndexList';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  options = { autoHide: false};
  boards: BoardModel[];
  currentIndex: number;
  listTasksRefs: HTMLCollection;
  listsRefs: HTMLCollection;

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

      // tslint:disable-next-line:radix
      this.draggedTaskIndex = this.targetTask.getAttribute('order-index');

      this.currentListId = this.targetTask.getAttribute('list-id');
      this.currentList = document.getElementById(this.currentListId);
      this.currentListOrderIndex = this.currentList.getAttribute('order-index');

      this.listTasksRefs = this.currentList.querySelectorAll('div.task') as unknown as HTMLCollection;
      const listRefs = document.querySelectorAll('div.list-placeholder') as unknown as HTMLCollection;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < listRefs.length; i++) {
        const taskRefs = listRefs[i].querySelectorAll('div.task') as unknown as HTMLCollection;
        const boundingRect = listRefs[i].getBoundingClientRect();
        // tslint:disable-next-line:max-line-length
        this.listOfListsOfTaskPositions.push(new PositionIndexList(listRefs[i].id, listRefs[i].getAttribute('order-index'), boundingRect.x, boundingRect.y));
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < taskRefs.length; j++) {
          const holder = taskRefs[j].getBoundingClientRect();
        // tslint:disable-next-line:max-line-length
          this.listOfListsOfTaskPositions[i].taskPositionsByOrder.push(new PositionIndex(holder.x, holder.y, taskRefs[j].getAttribute('order-index')));
        }
      }
      // console.log(listRefs);
    }
    else if (targetElement.classList.contains('list_header') || targetElement.classList.contains('list_title')) {
      this.isDraggingList = true;

      if (targetElement.classList.contains('list_title')) {
        this.targetList = targetElement.parentElement.parentElement.parentElement;
      }
      else {
        this.targetList = targetElement.parentElement.parentElement;
      }

      this.targetList.style.position = 'fixed';

      // tslint:disable-next-line:radix
      this.currentListOrderIndex = this.targetList.parentElement.getAttribute('order-index');
      this.listsRefs = document.querySelectorAll('div.list-placeholder') as unknown as HTMLCollection;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.listsRefs.length; i++) {
        const boundingRect = this.listsRefs[i].getBoundingClientRect();
        // tslint:disable-next-line:max-line-length
        this.listOfListsOfTaskPositions.push(new PositionIndexList(this.listsRefs[i].id, this.listsRefs[i].getAttribute('order-index'), boundingRect.x, boundingRect.y));
      }
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event): void {
    if (this.isDraggingTask) {

      this.targetTask.style.top = `${event.clientY}px`;
      this.targetTask.style.left = `${event.clientX}px`;

      const newListIndex = this.findListIndex(event);
      // console.log(newListIndex);
      if (newListIndex !== null && newListIndex !== this.currentListOrderIndex){
        // this.newTaskIndex = this.findTaskIndex(event, newListIndex);

        // tslint:disable-next-line:max-line-length
        this.boards[this.currentIndex].lists[newListIndex].tasks.push(this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)]);
        // tslint:disable-next-line:max-line-length
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

          // tslint:disable-next-line:max-line-length
          this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)] = this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)].tasks[Number(this.newTaskIndex)];
          taskElementHolder.setAttribute('order-index', this.targetTask.getAttribute('order-index'));

          // tslint:disable-next-line:radix
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
        // tslint:disable-next-line:radix
        const listHolder = this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)];
        const listElementHolder = this.getListElementByOrderIndex(this.newListOrderIndex);
        const newOrderIndex = listElementHolder.getAttribute('order-index');

        // tslint:disable-next-line:max-line-length
        this.boards[this.currentIndex].lists[Number(this.currentListOrderIndex)] = this.boards[this.currentIndex].lists[Number(this.newListOrderIndex)];
        listElementHolder.setAttribute('order-index', this.targetList.parentElement.getAttribute('order-index'));

        // tslint:disable-next-line:radix
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

  constructor(
    private readonly controlPanelService: ControlPanelService,
    private readonly dataService: DataService
  ) {
    this.isAddingList = false;
    this.boards = null;
    this.currentIndex = 0;
    this.taskPositionsByOrder = [];
    this.listOfListsOfTaskPositions = [];
    this.listTasksRefs = null;
  }

  ngOnInit(): void {
    this.controlPanelService.index$.subscribe( index => {
      if (index >= this.boards.length) {
        this.boards.push(new BoardModel('New Board'));
      }
      this.currentIndex = index;
    });

    this.controlPanelService.deleteIndex$.subscribe( index => {
      if (this.boards.length > 0) {
        this.boards.splice(index, 1);
      }
      this.currentIndex = 0;
    });

    this.dataService.getBoards().subscribe( data => {
      this.boards = data;
      this.controlPanelService.setIndex(this.currentIndex);
    });
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    this.boards[this.currentIndex].lists.push(new ListModel(text, this.boards[this.currentIndex].lists.length));
  }

  findListIndex(event): string {
    let holder = null;
    // tslint:disable-next-line:radix
    this.listOfListsOfTaskPositions.forEach( (list) => {
      if (event.clientX > list.x) { holder = list.orderIndex; }
    });
    return holder;
  }

  findTaskIndex(event, listOrderIndex): string {
    let holder = '0';
    // tslint:disable-next-line:radix
    this.listOfListsOfTaskPositions[Number(listOrderIndex)].taskPositionsByOrder.forEach( (task) => {
      if (event.clientY > task.y) { holder = task.index; }
    });
    return holder;
  }

  recalculateOrderIndices(listOrderIndex): void {
    // tslint:disable-next-line:max-line-length
    // const tasksHolder = document.getElementById(this.boards[this.currentIndex].lists[listOrderIndex].id).querySelectorAll('div.task') as unknown as HTMLCollection;
    // console.log(tasksHolder);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.boards[this.currentIndex].lists[listOrderIndex].tasks.length; i++) {
      this.boards[this.currentIndex].lists[listOrderIndex].tasks[i].orderIndex = i;
      // tasksHolder[i].setAttribute('order-index', i.toString());
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
}
