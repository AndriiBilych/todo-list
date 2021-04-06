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
    this.personalBoard.lists.push(new ListModel('Main list'));
    this.personalBoard.lists[0].tasks.push(new TaskModel('Main task'));
    this.personalBoard.lists[0].tasks.push(new TaskModel('Primary task'));
    this.personalBoard.lists[0].tasks.push(new TaskModel('Secondary task'));
    this.board = this.personalBoard;
  }

  ngOnInit(): void {
    this.controlPanelService.boardValue$.subscribe(
      data => this.board = data
    );
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    this.board.lists.push(new ListModel(text));
  }
}
