import { Component, OnInit } from '@angular/core';
import { BoardModel } from '../../models/BoardModel';
import { ListModel } from '../../models/ListModel';
import { ControlPanelService } from '../../services/control-panel.service';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  options = { autoHide: false};
  board: BoardModel;
  currentIndex: number;

  isAddingList: boolean;

  constructor(
    private readonly controlPanelService: ControlPanelService,
    private readonly dataService: DataService
  ) {
    this.isAddingList = false;
    this.board = null;
    this.currentIndex = 0;
  }

  ngOnInit(): void {
    this.controlPanelService.index$.subscribe( index => {
      this.currentIndex = index;
      this.dataService.getBoards().subscribe( data => this.board = data[index]);
    });

    this.dataService.getBoards().subscribe( data => {
      this.board = data[this.currentIndex];
      this.controlPanelService.setIndex(this.currentIndex);
    });
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    this.board.lists.push(new ListModel(text));
  }
}
