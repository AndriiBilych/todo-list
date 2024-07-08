import { ITask } from './interfaces/task.interface';
import { IDeserialize } from './interfaces/deserialize.interface';

export class TaskModel implements IDeserialize<ITask>, ITask {
  content: string;
  id: string;

  constructor(text?: string) {
    this.id = '';
    this.content = text ?? '';
  }

  deserialize(input: ITask): this {
    return Object.assign(this, input);
  }
}
