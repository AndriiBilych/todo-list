import { Injectable } from '@angular/core';
import { ListBoundingInfoModel } from '../models/list-bounding-info.model';
import { TaskBoundingInfoModel } from '../models/task-bounding-info.model';
import { EEvenType } from '../enums/even-type.enum';
import { BoardModel } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class ListDraggingService {
  public initListEventListeners(elements: HTMLElement[], listener: (elem: HTMLElement, selectedBoard: BoardModel) => any, selectedBoard: BoardModel, thisArg: any): void {
    elements.forEach((element) => {
      element.addEventListener(
        EEvenType.mousedown,
        () => listener.call(thisArg, element, selectedBoard),
      );
    });
  }
}
