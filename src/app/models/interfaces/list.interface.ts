import { ITask } from './task.interface';

export interface IList {
  tasks: ITask[];
  title: string;
  id: string;
}
