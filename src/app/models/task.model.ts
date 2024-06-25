import { ITask } from './interfaces/task.interface';
import { IDeserialize } from './interfaces/deserialize.interface';

export class TaskModel implements IDeserialize<ITask>, ITask {
  content: string;
  id: string;
  order: number;
  selected: boolean;

  constructor(text?: string, orderIndex?: number) {
    this.id = '';
    this.content = text ?? '';
    this.order = orderIndex ?? 0;
    this.selected = false;
  }

  deserialize(input: ITask): this {
    return Object.assign(this, input);
  }
}
