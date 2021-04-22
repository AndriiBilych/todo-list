import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BoardModel } from '../models/BoardModel';
import {BoardInterface} from '../models/interfaces/board.interface';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  JSONUrl = 'assets/boards.json';
  JSONTitlesUrl = 'assets/boardsTitles.json';

  constructor(private http: HttpClient) { }

  getBoards(): Observable<BoardModel[]> {
    return this.http.get<BoardInterface[]>(`${this.JSONUrl}`)
      .pipe(
        map((list) => {
          return list.map((item) => new BoardModel().deserialize(item));
        }),
        // tap(console.log)
      );
  }

  getTitles(): Observable<{ title: string, id: number }[]> {
    return this.http.get<{ title: string, id: number }[]>(`${this.JSONTitlesUrl}`);
  }
}
