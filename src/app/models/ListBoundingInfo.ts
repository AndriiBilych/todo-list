import { TaskBoundingInfo } from './TaskBoundingInfo';

export class ListBoundingInfo extends TaskBoundingInfo{
  taskPositionsByOrder: TaskBoundingInfo[];

  constructor(x: number, y: number, uuid: string) {
    super(x, y, uuid);
    this.taskPositionsByOrder = [];
  }
}
