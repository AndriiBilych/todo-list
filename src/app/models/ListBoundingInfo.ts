import { TaskBoundingInfo } from './TaskBoundingInfo';

export class ListBoundingInfo extends TaskBoundingInfo{
  tasksBoundingInfo: TaskBoundingInfo[];

  constructor(x: number, y: number, bottom: number, right: number, uuid: string) {
    super(x, y, bottom, right, uuid);
    this.tasksBoundingInfo = [];
  }
}
