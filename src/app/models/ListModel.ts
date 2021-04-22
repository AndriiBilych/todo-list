import { TaskModel } from './TaskModel';
import {ListInterface} from './interfaces/list.interface';
import {DesirializeInterface} from './interfaces/desirialize.interface';
import {v4 as uuidv4} from 'uuid';

export class ListModel implements DesirializeInterface<ListInterface>, ListInterface {
  tasks: TaskModel[];
  title: string;
  id: string;
  order: number;

  constructor() {
    this.id = uuidv4();
  }

  desirialize(input: ListInterface): this {

    for (const key of Object.keys(input)) {
      this[key] = input[key];
    }

    this.tasks = this.tasks.map((item) => new TaskModel().desirialize(item));

    return this;

  }
}
