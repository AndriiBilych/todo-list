import { Injectable } from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {BoardModel} from '../models/BoardModel';

@Injectable({
  providedIn: 'root'
})
export class BoardStoreService {
  private _selectedBoardSource = new ReplaySubject<BoardModel>();
  selectedBoard$ = this._selectedBoardSource.asObservable();

  private _boardsSource = new ReplaySubject<BoardModel[]>();
  boards$ = this._boardsSource.asObservable();

  constructor() {
    this._boardsSource.next([]);
    this._selectedBoardSource.next(null);
  }

  setSelectedBoard(board: BoardModel): void {
    this._selectedBoardSource.next(board);
  }

  setBoards(data: BoardModel[]) {
    this._boardsSource.next(data);
  }
}
