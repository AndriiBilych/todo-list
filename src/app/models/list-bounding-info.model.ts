import { TaskBoundingInfoModel } from './task-bounding-info.model';

export class ListBoundingInfoModel extends TaskBoundingInfoModel{
  tasksBoundingInfo: TaskBoundingInfoModel[];

  constructor(x: number, y: number, bottom: number, right: number, id: string) {
    super(x, y, bottom, right, id);
    this.tasksBoundingInfo = [];
  }
}
