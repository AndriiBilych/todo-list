import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BoardModel } from '../models/board.model';
import { IBoard } from '../models/interfaces/board.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getExampleBoards$(): Observable<BoardModel[]> {
    return this.http.get<IBoard[]>('assets/example-boards.json')
      .pipe(map((list) => {
        return list.map((item) => new BoardModel().deserialize(item));
      }));
  }
}
