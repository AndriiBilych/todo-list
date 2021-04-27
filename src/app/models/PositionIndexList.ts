import { PositionIndex } from './PositionIndex';

export class PositionIndexList {
  taskPositionsByOrder: PositionIndex[];
  orderIndex: string;
  id: string;
  x: number;
  y: number;

  constructor(id, orderIndex, x: number, y: number) {
    this.taskPositionsByOrder = [];
    this.orderIndex = orderIndex;
    this.id = id;
    this.x = x;
    this.y = y;
  }
}
