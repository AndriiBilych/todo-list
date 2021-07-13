export class TaskBoundingInfo {
  x: number;
  y: number;
  bottom: number;
  right: number;
  uuid: string;

  constructor(x, y, bottom, right, uuid) {
    this.x = x;
    this.y = y;
    this.bottom = bottom;
    this.right = right;
    this.uuid = uuid;
  }
}
