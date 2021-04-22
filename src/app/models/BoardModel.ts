import {ListModel} from './ListModel';
import {BoardInterface} from './interfaces/board.interface';
import {DesirializeInterface} from './interfaces/desirialize.interface';
import {v4 as uuidv4} from 'uuid';

export class BoardModel implements DesirializeInterface<BoardInterface>, BoardInterface {
  lists: ListModel[];
  title: string;
  id: string;

  constructor() {
    this.lists = [];
  }

  desirialize(input: BoardInterface): this {
    for (const key of Object.keys(input)) {
      this[key] = input[key];
    }

    this.lists = this.lists.map((item) => new ListModel().desirialize(item));
    this.id = uuidv4();

    return this;
  }
}
