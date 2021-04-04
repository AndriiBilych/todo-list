export class TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(title, comp) {
    this.userId = 0;
    this.id = 0;
    this.title = title;
    this.completed = comp;
  }
}
