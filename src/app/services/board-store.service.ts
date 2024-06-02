import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoardModel } from '../models/BoardModel';

@Injectable({
  providedIn: 'root'
})
export class BoardStoreService {
  #exampleBoardsSource = new BehaviorSubject<BoardModel[] | null>(null);
  exampleBoards$ = this.#exampleBoardsSource.asObservable();

  #userBoardsSource = new BehaviorSubject<BoardModel[] | null>(null);
  userBoards$ = this.#userBoardsSource.asObservable();

  setExampleBoards(data: BoardModel[]) {
    this.#exampleBoardsSource.next(data);
  }

  setUserBoards(data: BoardModel[]) {
    this.#userBoardsSource.next(data);
  }
}
