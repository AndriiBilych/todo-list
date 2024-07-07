export class IBoundingInfo {
  x: number;
  y: number;
  bottom: number;
  right: number;
  id: string;
  listId?: string;

  constructor(x: number, y: number, bottom: number, right: number, id: string, listId?: string) {
    this.x = x;
    this.y = y;
    this.bottom = bottom;
    this.right = right;
    this.id = id ?? '';
    this.listId = listId ?? '';
  }
}
