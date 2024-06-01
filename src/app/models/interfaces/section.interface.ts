import {IBoard} from "./board.interface";

export interface ISection {
  title: string;
  description: string;
  id: number;
  additionAllowed: boolean;

  boards: IBoard[];
}
