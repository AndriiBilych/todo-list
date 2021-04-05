import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TaskModel} from '../models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  // todosLimit:string = '?_limit=5';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${this.todosUrl}`);
  }
}
