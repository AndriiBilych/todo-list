import { IList } from './list.interface';

export interface IBoard {
  title: string;
  description: string;
  id: string;
  dateCreated?: string;
  dateModified?: string;
  color?: string;
  lists?: IList[];
}
