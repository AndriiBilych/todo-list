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
  board: BoardModel;
  currentIndex: number;
  listTasksRefs: HTMLCollection;

  draggedTaskIndex = '0';
  newTaskIndex = '1';
  currentListId = '0';
  currentListOrderIndex = '0';
  newListTitle = '';

  currentList: HTMLElement = null;
  targetTask: HTMLElement = null;
  taskPositionsByOrder: PositionIndex[];
  listOfListsOfTaskPositions: PositionIndexList[];

  isAddingList: boolean;
  isDragging = false;

  @HostListener('document:mousedown', ['$event.target'])
  startDrag(targetElement: HTMLElement): void {
    document.body.style.userSelect = 'none';
    if (targetElement.classList.contains('task')) {
      this.isDragging = true;

      this.targetTask = targetElement;
      this.targetTask.style.position = 'fixed';
      this.targetTask.style.height = '20px';
      this.targetTask.style.width = '240px';

      this.targetTask.parentElement.style.height = '30px';
      this.targetTask.parentElement.style.backgroundColor = 'var(--darkColor)';

      // tslint:disable-next-line:radix
      this.draggedTaskIndex = this.targetTask.getAttribute('order-index');

      this.currentListId = this.targetTask.getAttribute('list-id');
      this.currentList = document.getElementById(this.currentListId);
      this.currentListOrderIndex = this.currentList.getAttribute('order-index');

      this.listTasksRefs = this.currentList.querySelectorAll('div.task') as unknown as HTMLCollection;
      const listRefs = document.querySelectorAll('div.list') as unknown as HTMLCollection;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < listRefs.length; i++) {
        const taskRefs = listRefs[i].querySelectorAll('div.task') as unknown as HTMLCollection;
        const boundingRect = listRefs[i].getBoundingClientRect();
        // tslint:disable-next-line:max-line-length
        this.listOfListsOfTaskPositions.push(new PositionIndexList(listRefs[i].id, listRefs[i].getAttribute('order-index'), boundingRect.x, boundingRect.y));
        // console.log(this.listOfListsOfTaskPositions);
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < taskRefs.length; j++) {
          const holder = taskRefs[j].getBoundingClientRect();
        // tslint:disable-next-line:max-line-length
          this.listOfListsOfTaskPositions[i].taskPositionsByOrder.push(new PositionIndex(holder.x, holder.y, taskRefs[j].getAttribute('order-index')));
        }
      }

      // console.log(this.listOfListsOfTaskPositions);

      // tslint:disable-next-line:prefer-for-of
      // for (let i = 0; i < this.listTasks.length; i++) {
      //   const holder = this.listTasks[i].getBoundingClientRect();
      //   this.taskPositionsByOrder.push(new PositionIndex(holder.x, holder.y, this.listTasks[i].getAttribute('order-index')));
      // }

      // console.log(this.listTasks);
      // console.log(this.listTasks);
      // console.log(this.getTaskElementByOrderIndex('2'));
      // console.log(this.getTaskElementByOrderIndex('2'));
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event): void {
    if (this.isDragging) {

      this.targetTask.style.top = `${event.clientY}px`;
      this.targetTask.style.left = `${event.clientX}px`;

      const newListIndex = this.findListIndex(event);
      if (newListIndex !== null && newListIndex !== this.currentListOrderIndex){
        // this.newTaskIndex = this.findTaskIndex(event, newListIndex);

        // tslint:disable-next-line:max-line-length
        this.board.lists[newListIndex].tasks.push(this.board.lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)]);
        // tslint:disable-next-line:max-line-length
        this.board.lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)].listId = this.board.lists[newListIndex].id;
        this.board.lists[Number(this.currentListOrderIndex)].tasks.splice(Number(this.draggedTaskIndex), 1);

        this.recalculateOrderIndices(this.currentListOrderIndex);
        this.recalculateOrderIndices(newListIndex);

        this.currentListOrderIndex = newListIndex;
        this.draggedTaskIndex = null;
      }
      else {
        this.newTaskIndex = this.findTaskIndex(event, newListIndex);
        if (this.newTaskIndex !== null && this.draggedTaskIndex !== null && this.newTaskIndex !== this.draggedTaskIndex) {
          // tslint:disable-next-line:radix
          const taskHolder = this.board.lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)];
          const taskElementHolder = this.getTaskElementByOrderIndex(this.newTaskIndex);
          const newOrderIndex = taskElementHolder.getAttribute('order-index');

          // tslint:disable-next-line:max-line-length
          this.board.lists[Number(this.currentListOrderIndex)].tasks[Number(this.draggedTaskIndex)] = this.board.lists[Number(this.currentListOrderIndex)].tasks[Number(this.newTaskIndex)];
          taskElementHolder.setAttribute('order-index', this.targetTask.getAttribute('order-index'));

          // tslint:disable-next-line:radix
          this.board.lists[Number(this.currentListOrderIndex)].tasks[Number(this.newTaskIndex)] = taskHolder;
          this.targetTask.setAttribute('order-index', newOrderIndex);

          // console.log(`newIndex: ${this.newIndex} draggedTaskIndex: ${this.draggedTaskIndex}`);
          // console.log(`moved element: ${} draggedElement: ${this.targetTask}`);
          this.draggedTaskIndex = this.newTaskIndex;
        }
      }
    }
  }

  @HostListener('document:mouseup')
  endDrag(): void {
    document.body.style.userSelect = 'all';
    if (this.targetTask !== null) {
      this.isDragging = false;

      this.targetTask.style.removeProperty('position');
      this.targetTask.style.removeProperty('top');
      this.targetTask.style.removeProperty('left');
      this.targetTask.style.height = 'auto';

      this.targetTask.parentElement.style.background = 'none';
      this.targetTask.parentElement.style.height = 'auto';

      this.targetTask = null;
      this.listOfListsOfTaskPositions = [];
      // console.log(this.targetTask);
    }
  }

  constructor(
    private readonly controlPanelService: ControlPanelService,
    private readonly dataService: DataService
  ) {
    this.isAddingList = false;
    this.board = null;
    this.currentIndex = 0;
    this.taskPositionsByOrder = [];
    this.listOfListsOfTaskPositions = [];
    this.listTasksRefs = null;
  }

  ngOnInit(): void {
    this.controlPanelService.index$.subscribe( index => {
      this.currentIndex = index;
      this.dataService.getBoards().subscribe( data => this.board = data[index]);
    });

    this.dataService.getBoards().subscribe( data => {
      this.board = data[this.currentIndex];
      this.controlPanelService.setIndex(this.currentIndex);
    });
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    this.board.lists.push(new ListModel(text, this.board.lists.length));
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
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.board.lists[listOrderIndex].tasks.length; i++) {
      this.board.lists[listOrderIndex].tasks[i].orderIndex = i;
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
}
