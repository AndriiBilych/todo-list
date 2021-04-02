import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data-service.service';
import {TodoModel} from './models/TodoModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TodoList';
  todos: TodoModel[][];

  constructor(private readonly dataService: DataService) {
    this.todos = null;
  }

  ngOnInit(): void {
    this.dataService.getTodos().subscribe(data => {
      this.todos = [];
      for (let i = 0; i < 10; i++) {
        this.todos[i] = data.slice(i * 20, i * 20 + 20);
      }
    });
  }
}
