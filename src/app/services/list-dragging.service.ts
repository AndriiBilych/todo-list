import { inject, Injectable } from '@angular/core';
import { EEvenType } from '../enums/even-type.enum';
import { BoardModel } from '../models/board.model';
import { getIdFromAttribute } from '../tools/html-element.tools';
import { ListModel } from '../models/list.model';
import { IList } from '../models/interfaces/list.interface';
import { DOCUMENT } from '@angular/common';
import { CalculationService } from './calculation.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListDraggingService {
  readonly #onMoved = new Subject<boolean>();
  public onMoved$ = this.#onMoved.asObservable();

  draggedListIndex: number | null = null;
  draggedListNewIndex: number | null = null;
  draggedListData: ListModel | null = null;
  draggedListVisual: IList | null = null;

  #document: Document = inject(DOCUMENT);
  #calculationService = inject(CalculationService);
  shouldInsert = false;

  public initListMouseDownListener(
    element: HTMLElement,
    selectedBoard: BoardModel,
    listAtMousePosition: HTMLElement,
    clickCallback: (e: MouseEvent) => void,
  ): void {
    element.addEventListener(
      EEvenType.mousedown,
      (e: MouseEvent) => this.listMouseDown(element, selectedBoard, listAtMousePosition, clickCallback, e),
    );
  }

  public listMouseDown(element: HTMLElement, selectedBoard: BoardModel, listAtMousePosition: HTMLElement, clickCallback: (e: MouseEvent) => void, event: MouseEvent): void {
    // console.log('[list mouse down]');
    const listId = getIdFromAttribute(element);
    this.draggedListIndex = selectedBoard.lists.findIndex(({ id }) => id === listId);
    this.draggedListVisual = { ...selectedBoard.lists[this.draggedListIndex] };
    this.draggedListNewIndex = this.draggedListIndex;
    this.draggedListData = selectedBoard.lists[this.draggedListIndex];

    const controller = new AbortController();
    const { signal } = controller;
    this.#document.addEventListener(EEvenType.mousemove, this.listMouseMove.bind(this, selectedBoard, listAtMousePosition), { signal });
    this.#document.addEventListener(EEvenType.mouseup, this.listMouseUp.bind(this, controller, selectedBoard, listAtMousePosition, clickCallback), { signal });
  }

  public listMouseMove(selectedBoard: BoardModel, listAtMousePosition: HTMLElement, event: MouseEvent): void {
    // console.log('[list mouse move]', this.draggedListNewIndex);
    this.draggedListNewIndex = this.findListIndexByMouseX(event.clientX);
    if (!this.shouldInsert) {
      this.draggedListData = selectedBoard.lists.splice(this.draggedListIndex, 1)[0];
      this.shouldInsert = true;
    } else {
      listAtMousePosition.style.left = `${event.clientX}px`;
      listAtMousePosition.style.top = `${event.clientY}px`;
    }
  }

  public listMouseUp(controller: AbortController, selectedBoard: BoardModel, listAtMousePosition: HTMLElement, clickCallback: (e: MouseEvent) => void, event: MouseEvent): void {
    // console.log('[list mouse up]', this.shouldInsert);
    controller.abort();
    if (this.shouldInsert) {
      selectedBoard.lists.splice(this.draggedListNewIndex, 0, this.draggedListData);
      this.#onMoved.next(true);
      this.shouldInsert = false;
    } else {
      clickCallback(event);
    }
    this.draggedListData = null;
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
    if (!this.#calculationService.listsBoundingInfo || this.#calculationService.listsBoundingInfo.size === 0) {
      return 0;
    }

    const values = [...this.#calculationService.listsBoundingInfo.values()];
    const index = values.findIndex(({ x, right }) => clientX >= x && clientX <= right);
    const first = values[0];
    const last = values[values.length - 1];

    if (clientX > last.right) {
      return this.#calculationService.listsBoundingInfo.size - 1;
    }

    if (clientX < first.x) {
      return 0;
    }

    return index === -1 ? 0 : index;
  }
}
