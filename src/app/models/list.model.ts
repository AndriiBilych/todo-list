import { TaskModel } from './task.model';
import { IList } from './interfaces/list.interface';
import { IDeserialize } from './interfaces/deserialize.interface';

export class ListModel implements IDeserialize<IList>, IList {
  tasks: TaskModel[];
  title = 'New List';
  id: string;
  order: number;

  constructor(text?: string, order?: number) {
    this.tasks = [];
    this.id = '';
    this.title = text;
    this.order = order;
  }

  deserialize(input: IList): this {
    Object.assign(this, input);

    this.tasks = this.tasks.map((item) => new TaskModel().deserialize(item));

    this.tasks.sort((first, second) =>
      first.order > second.order ? 1 : first.order < second.order ? -1 : 0
    );

    return this;

  }
}
