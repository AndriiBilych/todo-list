import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { EEvenType } from '../enums/even-type.enum';
import { BoardModel } from '../models/board.model';
import { getIdFromAttribute } from '../tools/html-element.tools';
import { ListModel } from '../models/list.model';
import { IList } from '../models/interfaces/list.interface';
import { CalculationService } from './calculation.service';

@Injectable({
  providedIn: 'root'
})
export class ListDraggingService {
  readonly #onMoved = new Subject<boolean>();
  public onMoved$ = this.#onMoved.asObservable();

  // The element being dragged
  sourceListIndex: number | null = null;
  // The new position of the dragged element
  targetListIndex: number | null = null;
  // The data spliced from the board data
  sourceListData: ListModel | null = null;
  // sourceListData can't be used because placeholder needs to appear before sourceListData is spliced from the board
  sourceListPlaceholderData: IList | null = null;

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
      () => this.listMouseDown(element, selectedBoard, listAtMousePosition, clickCallback),
    );
  }

  private listMouseDown(element: HTMLElement, selectedBoard: BoardModel, listAtMousePosition: HTMLElement, clickCallback: (e: MouseEvent) => void): void {
    // console.log('[list mouse down]');
    const listId = getIdFromAttribute(element);
    this.sourceListIndex = selectedBoard.lists.findIndex(({ id }) => id === listId);
    this.sourceListPlaceholderData = { ...selectedBoard.lists[this.sourceListIndex] };
    this.targetListIndex = this.sourceListIndex;
    this.sourceListData = selectedBoard.lists[this.sourceListIndex];

    const controller = new AbortController();
    const { signal } = controller;
    this.#document.addEventListener(EEvenType.mousemove, this.listMouseMove.bind(this, selectedBoard, listAtMousePosition), { signal });
    this.#document.addEventListener(EEvenType.mouseup, this.listMouseUp.bind(this, controller, selectedBoard, listAtMousePosition, clickCallback), { signal });
  }

  private listMouseMove(selectedBoard: BoardModel, listAtMousePosition: HTMLElement, event: MouseEvent): void {
    // console.log('[list mouse move]', this.draggedListNewIndex);
    this.targetListIndex = this.#calculationService.findListIndexByMouseX(event.clientX);
    if (!this.shouldInsert) {
      this.sourceListData = selectedBoard.lists.splice(this.sourceListIndex, 1)[0];
      this.shouldInsert = true;
    } else {
      listAtMousePosition.style.left = `${event.clientX}px`;
      listAtMousePosition.style.top = `${event.clientY}px`;
    }
  }

  private listMouseUp(
    controller: AbortController,
    selectedBoard: BoardModel,
    listAtMousePosition: HTMLElement,
    clickCallback: (e: MouseEvent) => void,
    event: MouseEvent
  ): void {
    // console.log('[list mouse up]', this.shouldInsert);
    controller.abort();
    if (this.shouldInsert) {
      selectedBoard.lists.splice(this.targetListIndex, 0, this.sourceListData);
      this.#onMoved.next(true);
      this.shouldInsert = false;
    } else {
      clickCallback(event);
    }
    this.sourceListData = null;
    this.resetDraggingListStatus(listAtMousePosition);
  }

  private resetDraggingListStatus(listAtMousePosition: HTMLElement): void {
    this.sourceListIndex = null;
    this.targetListIndex = null;
    this.sourceListPlaceholderData = null;
    listAtMousePosition.style.removeProperty('top');
    listAtMousePosition.style.removeProperty('left');
  }
}
