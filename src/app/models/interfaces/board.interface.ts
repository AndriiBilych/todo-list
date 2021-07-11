import {ListInterface} from './list.interface';

export interface BoardInterface {
  lists: ListInterface[];
  title: string;
  id: number;
  uuid: string;
}
