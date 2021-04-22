import {v4 as uuidv4} from 'uuid';
import {TaskInterface} from './interfaces/task.interface';
import {DeserializeInterface} from './interfaces/deserializeInterface';

export class TaskModel implements DeserializeInterface<TaskInterface>, TaskInterface {
  content: string;
  positionIndex: number;
  id: string;
  listId: string;
  orderIndex: number;

  constructor(listId: string, text?: string) {
    this.listId = listId;
    this.id = uuidv4();
    this.content = text;
  }

  deserialize(input: TaskInterface): this {

    for (const key of Object.keys(input)) {
      this[key] = input[key];
    }

    return this;

  }
}
