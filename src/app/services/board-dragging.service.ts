import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { EEvenType } from '../enums/even-type.enum';

@Injectable({
  providedIn: 'root'
})
export class BoardDraggingService {

  #document: Document = inject(DOCUMENT);
  #deltaX = 0;

  public initBoardMouseDownListener(
    element: HTMLElement,
  ): void {
    element.addEventListener(
      EEvenType.mousedown,
      (event: MouseEvent) => this.taskMouseDown(element, event),
    );
  }

  private taskMouseDown(element: HTMLElement, event: MouseEvent): void {
    if (element.isEqualNode(event.target as HTMLElement)) {
      event.stopPropagation();
      this.#deltaX = event.clientX;

      const controller = new AbortController();
      const { signal } = controller;
      this.#document.addEventListener(EEvenType.mousemove, this.taskMouseMove.bind(this), { signal });
      this.#document.addEventListener(EEvenType.mouseup, this.taskMouseUp.bind(this, controller), { signal });
    }
  }

  private taskMouseMove(event: MouseEvent): void {
    const deltaMouseMoveX = this.#deltaX - event.clientX;
    this.#deltaX = event.clientX;
    window.scrollBy({ left: deltaMouseMoveX * 1.5 });
  }

  private taskMouseUp(
    controller: AbortController,
    event: MouseEvent
  ): void {
    event.stopImmediatePropagation();
    controller.abort();
  }
}
