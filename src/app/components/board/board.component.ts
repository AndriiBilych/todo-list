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

  draggedTaskIndex = 0;
  newIndex = 0;

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
      this.draggedTaskIndex = parseInt(this.targetTask.getAttribute('order-index'));

      const allTasks = document.querySelectorAll('div.task_container') as unknown as HTMLCollection;

      for (let i = 0; i < allTasks.length; i++) {
        const holder = allTasks[i].getBoundingClientRect();
        this.taskPositionIndexHolder.push(new PositionIndex(holder.x, holder.y, i));
      }

      console.log(`taskId: ${this.targetTask.id} listId: ${this.targetTask.getAttribute('list-id')}`);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event): void {
    if (this.isDragging) {

      this.targetTask.style.top = `${event.clientY}px`;
      this.targetTask.style.left = `${event.clientX}px`;

      // if (this.newIndex !== this.indexOfDraggedTask) {
        // this.board.lists[0].tasks.splice(this.newIndex, 0, );
        // const taskHolder = this.board.lists[0].tasks[indexOfDraggedTask];
        // this.board.lists[0].tasks.splice(indexOfDraggedTask, 1);
        // this.targetTask.setAttribute('data-id', this.newIndex);
        // this.indexOfDraggedTask = this.newIndex;
        // this.targetTask.setAttribute('data-id', this.newIndex);
        // console.log('Hello');
      // }
      this.newIndex = this.findTaskIndex(event);
      if (this.newIndex !== this.draggedTaskIndex) {
        const taskHolder = this.board.lists[0].tasks[this.draggedTaskIndex];
        // const domHolder = document.get
        this.board.lists[0].tasks[this.draggedTaskIndex] = this.board.lists[0].tasks[this.newIndex];

        this.board.lists[0].tasks[this.newIndex] = taskHolder;

        console.log(`newIndex: ${this.newIndex} draggedTaskIndex: ${this.draggedTaskIndex}`);
        this.draggedTaskIndex = this.newIndex;
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
  }

  ngOnInit(): void {
    this.controlPanelService.index$.subscribe( index => {
      this.currentIndex = index;
      this.dataService.getBoards().subscribe( data => this.board = data[index]);
    });

    this.dataService.getBoards().subscribe( data => {
      this.board = data[this.currentIndex];
      // this.board.lists
      this.controlPanelService.setIndex(this.currentIndex);
      // this.board.lists[0].tasks[0].taskId = uuidv4();
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
}
