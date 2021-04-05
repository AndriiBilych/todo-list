import {TaskModel} from './TaskModel';

export class ListModel {
  tasks: TaskModel[];
  title: string;

  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}
