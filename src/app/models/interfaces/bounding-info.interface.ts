export class IBoundingInfo {
  x: number;
  y: number;
  bottom: number;
  right: number;
  id: string;
  tasks?: Map<string, IBoundingInfo>;

  constructor(x: number, y: number, bottom: number, right: number, id: string) {
    this.x = x;
    this.y = y;
    this.bottom = bottom;
    this.right = right;
    this.id = id ?? '';
  }
}
