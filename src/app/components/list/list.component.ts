import {Component, Input, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ListModel } from '../../models/ListModel';
import {TaskModel} from '../../models/TaskModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {
  options = { autoHide: false};
  isAddingTask: boolean;
  isChangingName: boolean;

  // tslint:disable-next-line:variable-name no-input-rename
  @Input('list') _list: ListModel;
  @Output() closeListAction = new EventEmitter();
  @ViewChild('titleRef') titleRef: ElementRef;

  @HostListener('contextmenu', ['$event'])
  onRightClick(event): void {
    event.preventDefault();
    if (event.target.classList.contains('list_header') || event.target.classList.contains('list_title')) {
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
      // this._list.tasks.length > 0 ? this._list.tasks.length : 0, text
      this._list.tasks.push(new TaskModel(this._list.id, text, this._list.tasks.length));
    }
  }

  ngAfterViewInit(): void {
    // if (this._list.tasks.length === 0) {
    //   this.titleRef.nativeElement.click();
    // }
  }
}
