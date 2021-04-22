import {Component, Input, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
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

  // tslint:disable-next-line:variable-name no-input-rename
  @Input('list') _list: ListModel;
  @Output() closeListAction = new EventEmitter();

  constructor() {
    this.isAddingTask = false;
    this.isChangingName = false;
  }

  ngOnInit(): void {
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    if (text.length > 0) {
      // this._list.tasks.length > 0 ? this._list.tasks.length : 0, text
      this._list.tasks.push(new TaskModel(this._list.id, text, this._list.tasks.length));
    }
  }
}
