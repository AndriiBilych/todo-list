import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TodoModel} from '../models/TodoModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  // todosLimit:string = '?_limit=5';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${this.todosUrl}`);
  }
}
