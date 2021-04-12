import {ListModel} from './ListModel';

export class BoardModel {
  lists: ListModel[];
  title: string;
  id: number;

  constructor(title) {
    this.title = title;
    this.lists = [];
  }
}
