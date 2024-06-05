export class TaskBoundingInfoModel {
  x: number;
  y: number;
  bottom: number;
  right: number;
  id: string;

  constructor(x, y, bottom, right, id) {
    this.x = x;
    this.y = y;
    this.bottom = bottom;
    this.right = right;
    this.id = id;
  }
}
