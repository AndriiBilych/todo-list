import { TaskModel } from './task.model';
import { IList } from './interfaces/list.interface';
import { IDeserialize } from './interfaces/deserialize.interface';

export class ListModel implements IDeserialize<IList>, IList {
  tasks: TaskModel[];
  title = 'New List';
  id: string;

  constructor(text?: string, id?: string) {
    this.tasks = [];
    this.id = id;
    this.title = text;
  }

  deserialize(input: IList): this {
    Object.assign(this, input);

    this.tasks = this.tasks.map((item) => new TaskModel().deserialize(item));

    return this;
  }
}
