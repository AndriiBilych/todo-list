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
    // Object.keys returns an array of a given object's property names as strings
    for (const key of Object.keys(input)) {
      // this[key] selects the property as in this['lists'] would
      this[key] = input[key];
    }

    this.lists = this.lists.map((item) => new ListModel().deserialize(item));

    return this;
  }
}
