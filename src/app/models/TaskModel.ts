import {TaskInterface} from './interfaces/task.interface';
import {DeserializeInterface} from './interfaces/deserializeInterface';

export class TaskModel implements DeserializeInterface<TaskInterface>, TaskInterface {
  content: string;
  id: string;
  order: number;
  selected: boolean;

  constructor(text?: string, orderIndex?: number) {
    this.id = '';
    this.content = text;
    this.order = orderIndex;
    this.selected = false;
  }

  deserialize(input: TaskInterface): this {
    return Object.assign(this, input);
  }
}
