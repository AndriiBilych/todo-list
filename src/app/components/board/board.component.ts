import {Component, OnInit} from '@angular/core';
import {BoardModel} from '../../models/BoardModel';
import {TaskModel} from '../../models/TaskModel';
import {ListModel} from '../../models/ListModel';
import {ControlPanelService} from '../../services/control-panel.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: BoardModel;
  personalBoard: BoardModel;

  isAddingList: boolean;

  constructor(private readonly controlPanelService: ControlPanelService) {
    this.isAddingList = false;
    this.personalBoard = new BoardModel('Personal map');
    this.personalBoard.lists.push(new ListModel('Groceries'));
    this.personalBoard.lists[0].tasks.push(new TaskModel('Bread', false));
    this.personalBoard.lists[0].tasks.push(new TaskModel('Eggs', true));
    this.personalBoard.lists[0].tasks.push(new TaskModel('Cheese', true));
    this.board = this.personalBoard;
  }

  ngOnInit(): void {
    this.controlPanelService.boardValue$.subscribe(
      data => {
        this.personalBoard = this.board;
        this.board = data;
        console.log(this.personalBoard);
      }
    );

    this.controlPanelService.populateFlag$.subscribe(
      flag => {
        if (flag) { this.board = this.personalBoard; }
      }
    );
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    this.board.lists.push(new ListModel(text));
  }
}
