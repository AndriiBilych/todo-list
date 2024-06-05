import { BoardModel } from '../board.model';

export interface ISection {
  title: string;
  description: string;
  id: string;
  additionAllowed: boolean;

  boards: BoardModel[];
}
