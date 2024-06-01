import { TaskBoundingInfo } from './TaskBoundingInfo';

export class ListBoundingInfo extends TaskBoundingInfo{
  tasksBoundingInfo: TaskBoundingInfo[];

  constructor(x: number, y: number, bottom: number, right: number, id: string) {
    super(x, y, bottom, right, id);
    this.tasksBoundingInfo = [];
  }
}
