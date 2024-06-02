import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { BoardModel } from '../models/BoardModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoardStoreService {
  #exampleBoardsSource = new BehaviorSubject<BoardModel[] | null>(null);
  exampleBoards$ = this.#exampleBoardsSource.asObservable();

  #userBoardsSource = new BehaviorSubject<BoardModel[] | null>(null);
  userBoards$ = this.#userBoardsSource.asObservable();

  allBoards$ = combineLatest([this.exampleBoards$, this.userBoards$]).pipe(
    map(([examples, users]) => ([...(examples ?? []), ...(users ?? [])]))
  );

  setExampleBoards(data: BoardModel[]) {
    this.#exampleBoardsSource.next(data);
  }

  setUserBoards(data: BoardModel[]) {
    this.#userBoardsSource.next(data);
  }

  createBoard(): string {
    const id = this.newBoardId().toString();
    this.setUserBoards([...(this.#userBoardsSource?.value ?? []), new BoardModel(id, 'New board')])
    return id;
  }

  private newBoardId(): number {
    if (!this.#userBoardsSource.value?.length) {
      if (!this.#exampleBoardsSource.value?.length) {
        return 0;
      }
      return Number(this.#exampleBoardsSource.value?.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id) + 1;
    }

    return Number(this.#userBoardsSource.value.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id) + 1;
  }
}
