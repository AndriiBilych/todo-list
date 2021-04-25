import {ListModel} from './ListModel';
import {BoardInterface} from './interfaces/board.interface';
import {DeserializeInterface} from './interfaces/deserializeInterface';
import {v4 as uuidv4} from 'uuid';

export class BoardModel implements DeserializeInterface<BoardInterface>, BoardInterface {
  lists: ListModel[];
  title: string;
  id: string;

  constructor() {
    this.lists = [];
    this.id = uuidv4();
  }

  deserialize(input: BoardInterface): this {
    Object.assign(this, input);

    this.lists = this.lists.map((item) => new ListModel().deserialize(item));

    return this;
  }
}
