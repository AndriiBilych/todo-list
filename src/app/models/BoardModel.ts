import {ListModel} from './ListModel';

export class BoardModel {
  lists: ListModel[];
  title: string;

  constructor(title) {
    this.title = title;
    this.lists = [];
  }
}
