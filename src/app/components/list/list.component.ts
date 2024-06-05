import { Component, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ListModel } from '../../models/list.model';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  options = { autoHide: false};
  isAddingTask: boolean;
  isChangingName: boolean;

  @Input() list: ListModel;
  @Output() closeListAction = new EventEmitter();
  @ViewChild('titleRef') titleRef: ElementRef;

  @HostListener('contextmenu', ['$event'])
  onRightClick(event): void {
    event.preventDefault();
    if (event.target.classList.contains('header') || event.target.classList.contains('title') || event.target.classList.contains('title-container')) {
      this.isChangingName = !this.isChangingName;
    }
  }

  constructor() {
    this.isAddingTask = false;
    this.isChangingName = false;
  }

  pushToArray(text: string): void {
    if (text.length > 0) {
      this.list.tasks.push(new TaskModel(text, this.list.tasks.length));
    }
  }
}
