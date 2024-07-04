import { Injectable } from '@angular/core';
import { ListBoundingInfoModel } from '../models/list-bounding-info.model';
import { TaskBoundingInfoModel } from '../models/task-bounding-info.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  // This holds bounding positions and ids of all lists and tasks
  public listsBoundingInfo = new Map<string, ListBoundingInfoModel>();

  public calculateBoundingInfoSingle(elem: HTMLElement, id: string): void {
    const boundingRect = elem.getBoundingClientRect();
    this.listsBoundingInfo.set(id, new ListBoundingInfoModel(
      boundingRect.x,
      boundingRect.y,
      boundingRect.bottom,
      boundingRect.right,
      id
    ));

    const taskElements = Array.from(elem.querySelectorAll('div.task-container'));
    taskElements.forEach(ref => {
      const holder = ref.getBoundingClientRect();
      this.listsBoundingInfo[id].tasksBoundingInfo.push(
        new TaskBoundingInfoModel(
          holder.x,
          holder.y,
          holder.bottom,
          holder.right,
          ref.getAttribute('id')
        )
      );
    });
  }

  public removeBoundingInfo(id: string): void {
    this.listsBoundingInfo.delete(id);
  }
}
