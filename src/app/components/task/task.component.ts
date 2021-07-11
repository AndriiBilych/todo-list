import {Component, Input, OnInit, Output, EventEmitter, HostListener, OnDestroy} from '@angular/core';
import {TaskModel} from '../../models/TaskModel';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskModel;
  @Output() removeAction = new EventEmitter();
  isModifyingTask: boolean;

  // @HostListener('contextmenu', ['$event'])
  // onRightClick(event): void {
  //   event.preventDefault();
  //   if (event.target.classList.contains('task') || event.target.classList.contains('task_title')) {
  //     this.isModifyingTask = !this.isModifyingTask;
  //   }
  // }

  constructor(
  ) {
    this.isModifyingTask = false;
  }

  ngOnInit(): void {}
}
