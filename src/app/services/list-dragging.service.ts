import { inject, Injectable } from '@angular/core';
import { EEvenType } from '../enums/even-type.enum';
import { BoardModel } from '../models/board.model';
import { getIdFromAttribute } from '../tools/html-element.tools';
import { ListModel } from '../models/list.model';
import { IList } from '../models/interfaces/list.interface';
import { DOCUMENT } from '@angular/common';
import { CalculationService } from './calculation.service';

@Injectable({
  providedIn: 'root'
})
export class ListDraggingService {
  draggedListIndex: number | null = null;
  draggedListNewIndex: number | null = null;
  draggedListData: ListModel | null = null;
  draggedListVisual: IList | null = null;
  shouldInsert = false;

  #document: Document = inject(DOCUMENT);
  #calculationService = inject(CalculationService);

  public initListMouseDownListeners(
    elements: HTMLElement[],
    selectedBoard: BoardModel,
    listAtMousePosition: HTMLElement
  ): void {
    elements.forEach((element) => {
      element.addEventListener(
        EEvenType.mousedown,
        () => this.listMouseDown(element, selectedBoard, listAtMousePosition),
      );
    });
  }

  public listMouseDown(element: HTMLElement, selectedBoard: BoardModel, listAtMousePosition: HTMLElement): void {
    console.log('[list mouse down]');
    const listId = getIdFromAttribute(element);
    this.draggedListIndex = selectedBoard.lists.findIndex(({ id }) => id === listId);
    this.draggedListVisual = { ...selectedBoard.lists[this.draggedListIndex] };
    const controller = new AbortController();
    const { signal } = controller;
    this.#document.addEventListener(EEvenType.mousemove, this.listMouseMove.bind(this, selectedBoard, listAtMousePosition), { signal });
    this.#document.addEventListener(EEvenType.mouseup, this.listMouseUp.bind(this, controller, selectedBoard, listAtMousePosition), { signal });
  }

  public listMouseMove(selectedBoard: BoardModel, listAtMousePosition: HTMLElement, event: MouseEvent): void {
    console.log('[list mouse move]', event.clientX, event.clientY);
    const newIndex = this.findListIndexByMouseX(event.clientX);
    if (this.draggedListIndex !== newIndex && !this.shouldInsert) {
      this.shouldInsert = true;
      this.draggedListData = selectedBoard.lists.splice(this.draggedListIndex, 1)[0];
    }
    this.draggedListNewIndex = newIndex;
    listAtMousePosition.style.left = `${event.clientX}px`;
    listAtMousePosition.style.top = `${event.clientY}px`;
  }

  public listMouseUp(controller: AbortController, selectedBoard: BoardModel, listAtMousePosition: HTMLElement, event: MouseEvent): void {
    console.log('[list mouse up]', event);
    controller.abort();
    if (this.shouldInsert) {
      selectedBoard.lists.splice(this.draggedListNewIndex, 0, this.draggedListData);
      this.shouldInsert = false;
      const interval = setInterval(() => {
        const elem = this.#document.querySelector<HTMLElement>(`#${this.draggedListData.id}`);
        if (elem) {
          this.initListMouseDownListeners([elem], selectedBoard, listAtMousePosition);
          this.draggedListData = null;
          clearInterval(interval);
        }
      }, 50);
    }
    this.resetDraggingListStatus(listAtMousePosition);
  }

  private resetDraggingListStatus(listAtMousePosition: HTMLElement): void {
    this.draggedListIndex = null;
    this.draggedListNewIndex = null;
    this.draggedListVisual = null;
    listAtMousePosition.style.removeProperty('top');
    listAtMousePosition.style.removeProperty('left');
  }

  findListIndexByMouseX(clientX: number): number {
    if (!this.#calculationService.listsBoundingInfo || this.#calculationService.listsBoundingInfo.length === 0) {
      return 0;
    }

    const index = this.#calculationService.listsBoundingInfo.findIndex(list => clientX >= list.x && clientX <= list.right);
    const first = this.#calculationService.listsBoundingInfo[0];
    const last = this.#calculationService.listsBoundingInfo[this.#calculationService.listsBoundingInfo.length - 1];

    if (clientX > last.right) {
      return this.#calculationService.listsBoundingInfo.length - 1;
    }

    if (clientX < first.x) {
      return 0;
    }

    return index === -1 ? 0 : index;
  }
}
