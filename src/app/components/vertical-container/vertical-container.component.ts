import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../../models/TodoModel';

@Component({
  selector: 'app-vertical-container',
  templateUrl: './vertical-container.component.html',
  styleUrls: ['./vertical-container.component.css']
})
export class VerticalContainerComponent implements OnInit {

  // tslint:disable-next-line:variable-name no-input-rename
  @Input('todos') _todos: TodoModel[];
  isAddingTask: boolean;
  textToAdd: string;

  constructor() {
    this.isAddingTask = false;
  }

  ngOnInit(): void {
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(comp: boolean): void {
    this._todos.push(new TodoModel(this.textToAdd, comp));
    this.textToAdd = '';
  }
}
