import {v4 as uuidv4} from 'uuid';
import {TaskInterface} from './interfaces/task.interface';
import {DeserializeInterface} from './interfaces/deserializeInterface';

export class TaskModel implements DeserializeInterface<TaskInterface>, TaskInterface {
  content: string;
  positionIndex: number;
  id: string;
  listId: string;
  orderIndex: number;

  constructor(listId: string, text?: string, orderIndex?: number) {
    this.listId = listId;
    this.id = uuidv4();
    this.content = text;
    this.orderIndex = orderIndex;
  }

  deserialize(input: TaskInterface): this {
    return Object.assign(this, input);
  }
}
