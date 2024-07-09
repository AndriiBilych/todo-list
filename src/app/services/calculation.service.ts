import { Injectable } from '@angular/core';

import { IBoundingInfo } from '../models/interfaces/bounding-info.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  // This holds bounding positions, ids of all lists and tasks
  public listsBoundingInfo = new Map<string, IBoundingInfo>();

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
    const listBoundingInfo = this.listsBoundingInfo.get(listId);
    if (listBoundingInfo !== undefined) {
      const boundingRect = elem.getBoundingClientRect();
      if (!listBoundingInfo.tasks) {
        listBoundingInfo.tasks = new Map<string, IBoundingInfo>();
      }
      listBoundingInfo.tasks.set(id, {
        x: Number(boundingRect.x.toFixed(2)),
        y: Number(boundingRect.y.toFixed(2)),
        bottom: Number(boundingRect.bottom.toFixed(2)),
        right: Number(boundingRect.right.toFixed(2)),
        id,
      });
      this.listsBoundingInfo.set(listId, listBoundingInfo);
      return;
    }

    throw new Error(`No list defined when calculating task ${id} bounding`);
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

  public findTaskIndexByMouseY(listId: string, clientY: number): number {
    if (!this.listsBoundingInfo || this.listsBoundingInfo.size === 0) {
      return 0;
    }

    const taskBoundingInfo = this.listsBoundingInfo.get(listId).tasks;
    if (!taskBoundingInfo || taskBoundingInfo.size === 0) {
      return 0;
    }

    const values = [...taskBoundingInfo.values()];
    const index = values.findIndex(({ y, bottom }) => clientY >= y && clientY <= bottom);
    const first = values[0];
    const last = values[values.length - 1];

    if (clientY > last.bottom) {
      return this.listsBoundingInfo.size - 1;
    }

    if (clientY < first.y) {
      return 0;
    }

    return index === -1 ? 0 : index;
  }
}
