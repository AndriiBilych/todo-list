import {BoardModel} from '../BoardModel';

export interface ISection {
  title: string;
  description: string;
  id: string;
  additionAllowed: boolean;

  boards: BoardModel[];
}
