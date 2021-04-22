import {ListInterface} from './list.interface';

export interface BoardInterface {
  lists: ListInterface[];
  title: string;
  id: string;
}
