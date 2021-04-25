import { PositionIndex } from './PositionIndex';

export class PositionIndexList {
  taskPositionsByOrder: PositionIndex[];
  orderIndex: string;
  id: string;

  constructor(id, orderIndex) {
    this.taskPositionsByOrder = [];
    this.orderIndex = orderIndex;
    this.id = id;
  }
}
