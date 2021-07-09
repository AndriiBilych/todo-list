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
  constructor(private http: HttpClient) { }

  getBoards(): Observable<BoardModel[]> {
    return this.http.get<BoardInterface[]>('assets/boards.json')
      .pipe(map((list) => {
        return list.map((item) => new BoardModel().deserialize(item));
      }));
  }
}
