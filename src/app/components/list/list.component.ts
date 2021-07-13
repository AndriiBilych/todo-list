import {Component, Input, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef} from '@angular/core';
import { ListModel } from '../../models/ListModel';
import {TaskModel} from '../../models/TaskModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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

  ngOnInit(): void {}


  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    if (text.length > 0) {
      this.list.tasks.push(new TaskModel(text, this.list.tasks.length));
    }
  }
}
