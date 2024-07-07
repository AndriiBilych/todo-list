import { Injectable } from '@angular/core';

import { IBoundingInfo } from '../models/interfaces/bounding-info.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  // This holds bounding positions and ids of all lists
  public listsBoundingInfo = new Map<string, IBoundingInfo>();
  // This holds bounding positions, ids and listIds of all tasks
  public tasksBoundingInfo = new Map<string, IBoundingInfo>();

  public calculateListBoundingInfo(elem: HTMLElement, id: string): void {
    const boundingRect = elem.getBoundingClientRect();
    this.listsBoundingInfo.set(id, {
      x: boundingRect.x,
      y: boundingRect.y,
      bottom: boundingRect.bottom,
      right: boundingRect.right,
      id
    });
  }

  public calculateTaskBoundingInfo(elem: HTMLElement, id: string, listId: string): void {
    const boundingRect = elem.getBoundingClientRect();
    this.tasksBoundingInfo.set(id, {
      x: boundingRect.x,
      y: boundingRect.y,
      bottom: boundingRect.bottom,
      right: boundingRect.right,
      id,
      listId
    });
  }

  public removeBoundingInfo(id: string): void {
    this.listsBoundingInfo.delete(id);
  }

  public findListIndexByMouseX(clientX: number): number {
    if (!this.listsBoundingInfo || this.listsBoundingInfo.size === 0) {
      return 0;
    }

    const values = [...this.listsBoundingInfo.values()];
    const index = values.findIndex(({ x, right }) => clientX >= x && clientX <= right);
    const first = values[0];
    const last = values[values.length - 1];

    if (clientX > last.right) {
      return this.listsBoundingInfo.size - 1;
    }

    if (clientX < first.x) {
      return 0;
    }

    return index === -1 ? 0 : index;
  }

  // public findTaskIndexByMouseY(listId: string, clientY: number): number {
  //   if (!this.listsBoundingInfo || this.listsBoundingInfo.size === 0) {
  //     return 0;
  //   }
  //
  //   const taskBoundingInfo = this.listsBoundingInfo.get(listId).tasksBoundingInfo;
  //
  //   if (!taskBoundingInfo || taskBoundingInfo.length === 0) {
  //     return 0;
  //   }
  //
  //   const first = taskBoundingInfo[0];
  //   const last = taskBoundingInfo[taskBoundingInfo.length - 1];
  //   const selectedListIndex = this.findListIndexByTaskId(this.selectedTaskData.id);
  //
  //   if (!first || !last || clientY < first.y) {
  //     return 0;
  //   }
  //
  //   if (clientY > last.bottom) {
  //     if (taskBoundingInfo.length === 1 && last.id !== this.selectedTaskData.id) {
  //       return 1;
  //     }
  //     return taskBoundingInfo.length - (selectedListIndex === listIndex ? 1 : 0);
  //   }
  //
  //   let index = 0;
  //   for (let i = 0; i < taskBoundingInfo.length; i++) {
  //     if (clientY >= taskBoundingInfo[i].y) {
  //       index = i;
  //     }
  //   }
  //
  //   return index;
  // }
}
