import {TaskInterface} from './task.interface';

export interface ListInterface {
  tasks: TaskInterface[];
  title: string;
  id: string;
  orderIndex: number;
}
