import {v4 as uuidv4} from 'uuid';
import {TaskInterface} from './interfaces/task.interface';
import {DeserializeInterface} from './interfaces/deserializeInterface';

export class TaskModel implements DeserializeInterface<TaskInterface>, TaskInterface {
  content: string;
  id: number;
  uuid: string;
  order: number;
  selected: boolean;

  constructor(text?: string, orderIndex?: number) {
    this.id = 0;
    this.uuid = uuidv4();
    this.content = text;
    this.order = orderIndex;
    this.selected = false;
  }

  deserialize(input: TaskInterface): this {
    return Object.assign(this, input);
  }
}
