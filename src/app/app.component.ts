import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data-service.service';
import {BoardModel} from './models/BoardModel';
import {ListModel} from './models/ListModel';
import {TaskModel} from './models/TaskModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TodoList';
  board: BoardModel;

  constructor(private readonly dataService: DataService) {
    this.board = new BoardModel('Personal map');
    this.board.lists.push(new ListModel('Main list'));
    this.board.lists[0].tasks.push(new TaskModel('Main task'));
    this.board.lists[0].tasks.push(new TaskModel('Primary task'));
    this.board.lists[0].tasks.push(new TaskModel('Secondary task'));
  }

  ngOnInit(): void {
    // this.dataService.getTodos().subscribe(data => {
    //   this.todos = [];
    //   for (let i = 0; i < 10; i++) {
    //     this.todos[i] = data.slice(i * 20, i * 20 + 20);
    //   }
    // });
  }
}
