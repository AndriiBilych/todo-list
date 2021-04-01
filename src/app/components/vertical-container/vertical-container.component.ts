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

  constructor() { }

  ngOnInit(): void {
  }

  array(n: number): number[] {
    return Array(n);
  }
}
