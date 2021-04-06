import { Injectable } from '@angular/core';
import {DataService} from './data-service.service';
import {BoardModel} from '../models/BoardModel';
import {Subject} from 'rxjs';
import {ListModel} from '../models/ListModel';

@Injectable({
  providedIn: 'root'
})
export class ControlPanelService {
  // tslint:disable-next-line:variable-name
  private _boardSource = new Subject<BoardModel>();
  // tslint:disable-next-line:variable-name
  private _populationCommandSource = new Subject<boolean>();
  boardValue$ = this._boardSource.asObservable();
  populateFlag$ = this._populationCommandSource.asObservable();

  constructor(private readonly dataService: DataService) { }

  getDataForBoard(): void {
    // this._boardSource.next(null);

    // tslint:disable-next-line:prefer-const
    let board = new BoardModel('JSONPlaceholder');

    this.dataService.getTodos().subscribe(data => {
      board.lists = [];
      for (let i = 0; i < 10; i++) {
        board.lists.push(new ListModel(`List ${i + 1}`));
        board.lists[i].tasks = [];
        board.lists[i].tasks = data.slice(i * 20, i * 20 + 20);
      }
    });

    this._boardSource.next(board);
  }

  sendFlag(): void {
    this._populationCommandSource.next(true);
  }
}
