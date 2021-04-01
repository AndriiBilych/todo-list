import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../../models/TodoModel';

@Component({
  selector: 'app-horizontal-container',
  templateUrl: './horizontal-container.component.html',
  styleUrls: ['./horizontal-container.component.css']
})
export class HorizontalContainerComponent implements OnInit {
  // tslint:disable-next-line:variable-name no-input-rename
  @Input('todos') _todos: TodoModel[][];

  constructor() { }

  ngOnInit(): void {
  }

  array(n: number): number[] {
    return Array(n);
  }
}
