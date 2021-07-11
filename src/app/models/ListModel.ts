import { TaskModel } from './TaskModel';
import {ListInterface} from './interfaces/list.interface';
import {DeserializeInterface} from './interfaces/deserializeInterface';
import {v4 as uuidv4} from 'uuid';

export class ListModel implements DeserializeInterface<ListInterface>, ListInterface {
  tasks: TaskModel[];
  title = 'New List';
  id: number;
  uuid: string;
  order: number;

  constructor(text?: string, order?: number) {
    this.tasks = [];
    this.uuid = uuidv4();
    this.id = 0;
    this.title = text;
    this.order = order;
  }

  deserialize(input: ListInterface): this {
    Object.assign(this, input);

    this.tasks = this.tasks.map((item) => new TaskModel().deserialize(item));

    this.tasks.sort((first, second) =>
      first.order > second.order ? 1 : first.order < second.order ? -1 : 0
    );

    return this;

  }
}
