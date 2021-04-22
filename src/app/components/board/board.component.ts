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
  newIndex = 1;

  targetTask: HTMLElement = null;
  taskPositionIndexHolder: PositionIndex[];

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

      // tslint:disable-next-line:max-line-length
      this.listTasks = document.getElementById(this.targetTask.getAttribute('list-id')).querySelectorAll('div.task') as unknown as HTMLCollection;

      for (let i = 0; i < this.listTasks.length; i++) {
        const holder = this.listTasks[i].getBoundingClientRect();
        this.taskPositionIndexHolder.push(new PositionIndex(holder.x, holder.y, i));
      }

      // console.log(`taskId: ${this.targetTask.id} listId: ${this.targetTask.getAttribute('list-id')}`);
      // console.log(this.getTaskElementByOrderIndex('2'));
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event): void {
    if (this.isDragging) {

      this.targetTask.style.top = `${event.clientY}px`;
      this.targetTask.style.left = `${event.clientX}px`;


      this.newIndex = this.findTaskIndex(event);
      if (this.newIndex.toString() !== this.draggedTaskIndex) {
        const taskHolder = this.board.lists[0].tasks[this.draggedTaskIndex];
        const taskElementHolder = this.getTaskElementByOrderIndex(this.newIndex.toString());
        const newOrderIndex = taskElementHolder.getAttribute('order-index');

        this.board.lists[0].tasks[this.draggedTaskIndex] = this.board.lists[0].tasks[this.newIndex];
        taskElementHolder.setAttribute('order-index', this.targetTask.getAttribute('order-index'));

        this.board.lists[0].tasks[this.newIndex] = taskHolder;
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
    this.taskPositionIndexHolder = [];
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

  findTaskIndex(event): number {
    let holder = 0;
    this.taskPositionIndexHolder.forEach( (task) => {
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
  }
}
