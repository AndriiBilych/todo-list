import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TaskModel} from '../../models/TaskModel';
import {ListModel} from '../../models/ListModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  options = { autoHide: false};

  // tslint:disable-next-line:variable-name no-input-rename
  @Input('list') _list: ListModel;
  @Output() closeListAction = new EventEmitter();
  isAddingTask: boolean;
  isChangingName: boolean;

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
      this._list.tasks.push(new TaskModel(text, true));
    }
  }
}
