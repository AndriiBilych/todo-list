import { ListModel } from './list.model';
import { IBoard } from './interfaces/board.interface';
import { IDeserialize } from './interfaces/deserialize.interface';

export class BoardModel implements IDeserialize<IBoard>, IBoard {
  lists: ListModel[];
  title: string;
  description: string;
  id: string;
  dateCreated: string;
  dateModified: string;
  color: string;

  constructor(id?: string, title?: string, description?: string) {
    this.id = id ?? '';
    this.title = title ?? '';
    this.description = description ?? '';
    this.lists = [];
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
