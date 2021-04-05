import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../models/TaskModel';
import {ListModel} from '../../models/ListModel';

@Component({
  selector: 'app-vertical-container',
  templateUrl: './vertical-container.component.html',
  styleUrls: ['./vertical-container.component.css']
})
export class VerticalContainerComponent implements OnInit {

  // tslint:disable-next-line:variable-name no-input-rename
  @Input('list') _list: ListModel;
  isAddingTask: boolean;

  constructor() {
    this.isAddingTask = false;
  }

  ngOnInit(): void {
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    this._list.tasks.push(new TaskModel(text));
  }
}
