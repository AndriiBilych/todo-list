import { Component, HostListener, OnInit } from '@angular/core';
import { BoardModel } from '../../models/BoardModel';
import { PositionIndex } from '../../models/PositionIndex';
import { ListModel } from '../../models/ListModel';
import { ControlPanelService } from '../../services/control-panel.service';
import { DataService } from '../../services/data-service.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  options = { autoHide: false};
  board: BoardModel;
  currentIndex: number;
  listTasks: HTMLCollection;

  draggedTaskIndex = '0';
  newIndex = '1';
  currentListId = '0';
  currentListOrderIndex = '0';

  currentList: HTMLElement = null;
  targetTask: HTMLElement = null;
  taskPositionsByOrder: PositionIndex[];

  isAddingList: boolean;
  isDragging = false;

  @HostListener('document:mousedown', ['$event.target'])
  startDrag(targetElement: HTMLElement): void {

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

      this.listTasks = this.currentList.querySelectorAll('div.task') as unknown as HTMLCollection;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.listTasks.length; i++) {
        const holder = this.listTasks[i].getBoundingClientRect();
        this.taskPositionsByOrder.push(new PositionIndex(holder.x, holder.y, this.listTasks[i].getAttribute('order-index')));
      }

      console.log(this.listTasks);
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

      this.newIndex = this.findTaskIndex(event);
      if (this.newIndex !== null && this.newIndex !== this.draggedTaskIndex) {
        // tslint:disable-next-line:radix
        const taskHolder = this.board.lists[parseInt(this.currentListOrderIndex)].tasks[this.draggedTaskIndex];
        const taskElementHolder = this.getTaskElementByOrderIndex(this.newIndex);
        const newOrderIndex = taskElementHolder.getAttribute('order-index');

        // tslint:disable-next-line:radix max-line-length
        this.board.lists[parseInt(this.currentListOrderIndex)].tasks[this.draggedTaskIndex] = this.board.lists[parseInt(this.currentListOrderIndex)].tasks[this.newIndex];
        taskElementHolder.setAttribute('order-index', this.targetTask.getAttribute('order-index'));

        // tslint:disable-next-line:radix
        this.board.lists[parseInt(this.currentListOrderIndex)].tasks[this.newIndex] = taskHolder;
        this.targetTask.setAttribute('order-index', newOrderIndex);

        // console.log(`newIndex: ${this.newIndex} draggedTaskIndex: ${this.draggedTaskIndex}`);
        // console.log(`moved element: ${} draggedElement: ${this.targetTask}`);
        this.draggedTaskIndex = this.newIndex.toString();
      }
    }
  }

  @HostListener('document:mouseup')
  endDrag(): void {
    if (this.targetTask !== null) {
      this.isDragging = false;

      this.targetTask.style.removeProperty('position');
      this.targetTask.style.removeProperty('top');
      this.targetTask.style.removeProperty('left');
      this.targetTask.style.height = 'auto';

      this.targetTask.parentElement.style.background = 'none';
      this.targetTask.parentElement.style.height = 'auto';

      this.targetTask = null;
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
    this.listTasks = null;
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
    this.board.lists.push(new ListModel());
  }

  findTaskIndex(event): string {
    let holder = '0';
    this.taskPositionsByOrder.forEach( (task) => {
      if (event.clientY > task.y) { holder = task.index; }
    });
    return holder;
  }

  getTaskElementByOrderIndex(index: string): HTMLElement {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listTasks.length; i++) {
      if (this.listTasks[i].getAttribute('order-index') === index) {
        return this.listTasks[i] as HTMLElement;
      }
    }
    return null;
  }
}
