import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BoardModel } from '../models/BoardModel';

@Injectable({
  providedIn: 'root'
})
export class BoardStoreService {
  private _boardsSource = new ReplaySubject<BoardModel[]>();
  boards$ = this._boardsSource.asObservable();

  constructor() {
    this._boardsSource.next([]);
  }

  setBoards(data: BoardModel[]) {
    this._boardsSource.next(data);
  }
}
