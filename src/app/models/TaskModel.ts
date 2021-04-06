export class TaskModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(title, bool) {
    this.userId = 0;
    this.id = 0;
    this.title = title;
    this.completed = bool;
  }
}
