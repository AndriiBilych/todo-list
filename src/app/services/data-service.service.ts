import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BoardModel } from '../models/BoardModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  JSONUrl = 'assets/boards.json';
  JSONTitlesUrl = 'assets/boardsTitles.json';

  constructor(private http: HttpClient) { }

  getBoards(): Observable<BoardModel[]> {
    return this.http.get<BoardModel[]>(`${this.JSONUrl}`);
  }

  getTitles(): Observable<{ title: string, id: number }[]> {
    return this.http.get<{ title: string, id: number }[]>(`${this.JSONTitlesUrl}`);
  }
}
