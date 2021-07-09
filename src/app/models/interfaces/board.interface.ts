import {ListInterface} from './list.interface';

export interface BoardInterface {
  lists: ListInterface[];
  title: string;
  uuid: string;
}
