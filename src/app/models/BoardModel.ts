import {ListModel} from './ListModel';
import {IBoard} from './interfaces/board.interface';
import {DeserializeInterface} from './interfaces/deserializeInterface';

export class BoardModel implements DeserializeInterface<IBoard>, IBoard {
  lists: ListModel[];
  title: string;
  description: string;
  id: string;
  dateCreated: string;
  dateModified: string;
  color: string;

  constructor(title?: string) {
    this.title = title;
    this.description = '';
    this.lists = [];
    this.id = '';
    this.dateCreated = '';
    this.dateModified = '';
    this.color = '';
  }

  deserialize(input: IBoard): this {
    Object.assign(this, input);

    this.lists = this.lists.map((item) => new ListModel().deserialize(item));

    this.lists.sort((first, second) =>
      first.order > second.order ? 1 : first.order < second.order ? -1 : 0
    );

    return this;
  }
}
