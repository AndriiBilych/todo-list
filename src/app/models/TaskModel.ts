import {v4 as uuidv4} from 'uuid';
import {TaskInterface} from './interfaces/task.interface';
import {ListInterface} from './interfaces/list.interface';
import {DesirializeInterface} from './interfaces/desirialize.interface';

export class TaskModel implements DesirializeInterface<TaskInterface>, TaskInterface {
  content: string;
  positionIndex: number;
  taskId: string;

  constructor() {
    this.taskId = uuidv4();
  }

  desirialize(input: TaskInterface): this {

    for (const key of Object.keys(input)) {
      this[key] = input[key];
    }

    return this;

  }
}
