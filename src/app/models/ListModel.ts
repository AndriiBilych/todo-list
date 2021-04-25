import { TaskModel } from './TaskModel';
import {ListInterface} from './interfaces/list.interface';
import {DeserializeInterface} from './interfaces/deserializeInterface';
import {v4 as uuidv4} from 'uuid';

export class ListModel implements DeserializeInterface<ListInterface>, ListInterface {
  tasks: TaskModel[];
  title: string;
  id: string;
  orderIndex: number;

  constructor() {
    this.tasks = [];
    this.id = uuidv4();
  }

  deserialize(input: ListInterface): this {
    Object.assign(this, input);

    this.tasks = this.tasks.map((item) => new TaskModel(this.id).deserialize(item));

    return this;

  }
}
