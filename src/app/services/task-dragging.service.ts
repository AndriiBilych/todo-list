import { inject, Injectable } from '@angular/core';
import { EEvenType } from '../enums/even-type.enum';
import { BoardModel } from '../models/board.model';
import { getIdFromAttribute } from '../tools/html-element.tools';
import { DOCUMENT } from '@angular/common';
import { CalculationService } from './calculation.service';
import { TaskModel } from '../models/task.model';
import { ITask } from '../models/interfaces/task.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskDraggingService {
  readonly #onMoved = new Subject<boolean>();
  public onMoved$ = this.#onMoved.asObservable();

  // Index of the task being dragged
  sourceTaskIndex: number | null = null;
  // Index of the list the task is being dragged from
  sourceListIndex: number | null = null;
  // The new task position of the dragged element
  targetTaskIndex: number | null = null;
  // The index of the list to which the task is being dragged to
  targetListIndex: number | null = null;
  // The data spliced from the board data
  sourceTaskData: TaskModel | null = null;
  // sourceTaskData can't be used because placeholder needs to appear before sourceTaskData is spliced from the board
  sourceTaskPlaceholderData: ITask | null = null;

  #document: Document = inject(DOCUMENT);
  #calculationService = inject(CalculationService);
  shouldInsert = false;

  public initTaskMouseDownListener(
    element: HTMLElement,
    selectedBoard: BoardModel,
    taskAtMousePosition: HTMLElement,
    clickCallback: (e: MouseEvent) => void,
  ): void {
    element.addEventListener(
      EEvenType.mousedown,
      () => this.taskMouseDown(element, selectedBoard, taskAtMousePosition, clickCallback),
    );
  }

  private taskMouseDown(element: HTMLElement, selectedBoard: BoardModel, taskAtMousePosition: HTMLElement, clickCallback: (e: MouseEvent) => void): void {
    // console.log('[task mouse down]');

    const taskId = getIdFromAttribute(element);
    this.sourceListIndex = selectedBoard.lists.findIndex(({ tasks }) => {
      this.sourceTaskIndex = tasks.findIndex(({ id }) => taskId === id);
      return this.sourceTaskIndex > -1;
    });
    this.sourceTaskPlaceholderData = { ...selectedBoard.lists[this.sourceListIndex].tasks[this.sourceTaskIndex] };
    this.targetTaskIndex = this.sourceTaskIndex;
    this.targetListIndex = this.sourceListIndex;
    this.sourceTaskData = selectedBoard.lists[this.sourceListIndex].tasks[this.sourceTaskIndex];

    const controller = new AbortController();
    const { signal } = controller;
    this.#document.addEventListener(EEvenType.mousemove, this.taskMouseMove.bind(this, selectedBoard, taskAtMousePosition), { signal });
    this.#document.addEventListener(EEvenType.mouseup, this.taskMouseUp.bind(this, controller, selectedBoard, taskAtMousePosition, clickCallback), { signal });
  }

  private taskMouseMove(selectedBoard: BoardModel, taskAtMousePosition: HTMLElement, event: MouseEvent): void {

    this.targetListIndex = this.#calculationService.findListIndexByMouseX(event.clientX);
    this.targetTaskIndex = this.#calculationService.findTaskIndexByMouseY(
      selectedBoard.lists[this.targetListIndex].id,
      event.clientY
    );
    // console.log('[task mouse move]', this.targetListIndex, this.targetTaskIndex, this.shouldInsert);
    if (!this.shouldInsert) {
      this.sourceTaskData = selectedBoard.lists[this.sourceListIndex].tasks.splice(this.sourceTaskIndex, 1)[0];
      this.shouldInsert = true;
    } else {
      taskAtMousePosition.style.left = `${event.clientX}px`;
      taskAtMousePosition.style.top = `${event.clientY}px`;
    }
  }

  private taskMouseUp(
    controller: AbortController,
    selectedBoard: BoardModel,
    taskAtMousePosition: HTMLElement,
    clickCallback: (e: MouseEvent) => void,
    event: MouseEvent
  ): void {
    // console.log('[task mouse up]');

    controller.abort();
    if (this.shouldInsert) {
      selectedBoard.lists[this.targetListIndex].tasks.splice(this.targetTaskIndex, 0, this.sourceTaskData);
      this.#onMoved.next(true);
      this.shouldInsert = false;
    } else {
      clickCallback(event);
    }
    this.sourceTaskData = null;
    this.resetDraggingTaskStatus(taskAtMousePosition);
  }

  private resetDraggingTaskStatus(taskAtMousePosition: HTMLElement): void {
    this.sourceTaskIndex = null;
    this.sourceListIndex = null;
    this.targetTaskIndex = null;
    this.targetListIndex = null;
    this.sourceTaskPlaceholderData = null;
    taskAtMousePosition.style.removeProperty('top');
    taskAtMousePosition.style.removeProperty('left');
  }
}
