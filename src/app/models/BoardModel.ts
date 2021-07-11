import {ListModel} from './ListModel';
import {BoardInterface} from './interfaces/board.interface';
import {DeserializeInterface} from './interfaces/deserializeInterface';
import {v4 as uuidv4} from 'uuid';

export class BoardModel implements DeserializeInterface<BoardInterface>, BoardInterface {
  lists: ListModel[];
  title: string;
  id: number;
  uuid: string;

  constructor(title?: string) {
    this.title = title;
    this.lists = [];
    this.id = 0;
    this.uuid = uuidv4();
  }

  deserialize(input: BoardInterface): this {
    Object.assign(this, input);

    this.lists = this.lists.map((item) => new ListModel().deserialize(item));

    this.lists.sort((first, second) =>
      first.order > second.order ? 1 : first.order < second.order ? -1 : 0
    );

    return this;
  }
}
