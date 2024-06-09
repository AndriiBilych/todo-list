import { Injectable } from '@angular/core';
import { ListBoundingInfoModel } from '../models/list-bounding-info.model';
import { TaskBoundingInfoModel } from '../models/task-bounding-info.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  // This holds bounding positions and ids of all lists and tasks
  public listsBoundingInfo: ListBoundingInfoModel[] = [];

  public calculateBoundingInfo(listsRef: Element[]) {
    this.listsBoundingInfo = [];

    listsRef.forEach((list, i) => {
      const boundingRect = list.getBoundingClientRect();
      this.listsBoundingInfo.push(
        new ListBoundingInfoModel(
          boundingRect.x,
          boundingRect.y,
          boundingRect.bottom,
          boundingRect.right,
          list.getAttribute('id')
        )
      );

      const taskElements = Array.from(list.querySelectorAll('div.task-container'));
      taskElements.forEach(ref => {
        const holder = ref.getBoundingClientRect();
        this.listsBoundingInfo[i].tasksBoundingInfo.push(
          new TaskBoundingInfoModel(
            holder.x,
            holder.y,
            holder.bottom,
            holder.right,
            ref.getAttribute('id')
          )
        );
      });
    });
  }
}
