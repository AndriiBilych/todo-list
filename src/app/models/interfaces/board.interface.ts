import {ListInterface} from './list.interface';

export interface IBoard {
  title: string;
  description: string;
  id: number;
  uid?: string;
  dateCreated?: string;
  dateModified?: string;
  color?: string;
  lists?: ListInterface[];
}
