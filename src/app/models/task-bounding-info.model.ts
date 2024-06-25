export class TaskBoundingInfoModel {
  x: number;
  y: number;
  bottom: number;
  right: number;
  id: string;

  constructor(x: number, y: number, bottom: number, right: number, id: string | null) {
    this.x = x;
    this.y = y;
    this.bottom = bottom;
    this.right = right;
    this.id = id ?? '';
  }
}
