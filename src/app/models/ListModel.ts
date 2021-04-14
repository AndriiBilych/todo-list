
export class ListModel {
  tasks: string[];
  title: string;

  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}
