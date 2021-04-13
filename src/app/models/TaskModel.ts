export class TaskModel {
  title: string;
  completed: boolean;

  constructor(title, bool) {
    this.title = title;
    this.completed = bool;
  }
}
