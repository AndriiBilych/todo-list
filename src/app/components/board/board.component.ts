import {Component, Input, OnInit} from '@angular/core';
import {BoardModel} from '../../models/BoardModel';
import {TaskModel} from '../../models/TaskModel';
import {ListModel} from '../../models/ListModel';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // tslint:disable-next-line:variable-name no-input-rename
  @Input('board') _board: BoardModel;

  isAddingList: boolean;

  constructor() {
    this.isAddingList = false;
  }

  ngOnInit(): void {
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    this._board.lists.push(new ListModel(text));
  }
}
