import { inject, Injectable } from '@angular/core';
import { EEvenType } from '../enums/even-type.enum';
import { BoardModel } from '../models/board.model';
import { getIdFromAttribute } from '../tools/html-element.tools';
import { DOCUMENT } from '@angular/common';
import { CalculationService } from './calculation.service';
import { TaskModel } from '../models/task.model';
import { ITask } from '../models/interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskDraggingService {
  draggedTaskIndex: number | null = null;
  draggedTaskListIndex: number | null = null;
  draggedTaskNewIndex: number | null = null;
  draggedTaskNewListIndex: number | null = null;
  draggedTaskData: TaskModel | null = null;
  draggedTaskVisual: ITask | null = null;

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

  taskMouseDown(element: HTMLElement, selectedBoard: BoardModel, taskAtMousePosition: HTMLElement, clickCallback: (e: MouseEvent) => void): void {
    console.log('[task mouse down]');

    const taskId = getIdFromAttribute(element);
    this.draggedTaskListIndex = selectedBoard.lists.findIndex(({ tasks }) => {
      this.draggedTaskIndex = tasks.findIndex(({ id }) => taskId === id);
      return this.draggedTaskIndex > -1;
    });
    this.draggedTaskVisual = { ...selectedBoard.lists[this.draggedTaskListIndex].tasks[this.draggedTaskIndex] };
    this.draggedTaskNewIndex = this.draggedTaskIndex;
    this.draggedTaskNewListIndex = this.draggedTaskListIndex;
    this.draggedTaskData = selectedBoard.lists[this.draggedTaskListIndex].tasks[this.draggedTaskIndex];

    const controller = new AbortController();
    const { signal } = controller;
    this.#document.addEventListener(EEvenType.mousemove, this.taskMouseMove.bind(this, selectedBoard, taskAtMousePosition), { signal });
    this.#document.addEventListener(EEvenType.mouseup, this.taskMouseUp.bind(this, controller, selectedBoard, taskAtMousePosition, clickCallback), { signal });
  }

  taskMouseMove(): void {
    console.log('[task mouse move]');

    // this.draggedListNewIndex = this.findListIndexByMouseX(event.clientX);
    // if (!this.shouldInsert) {
    //   this.draggedListData = selectedBoard.lists.splice(this.draggedListIndex, 1)[0];
    //   this.shouldInsert = true;
    // } else {
    //   listAtMousePosition.style.left = `${event.clientX}px`;
    //   listAtMousePosition.style.top = `${event.clientY}px`;
    // }
  }

  taskMouseUp(
    controller: AbortController,
    selectedBoard: BoardModel,
    taskAtMousePosition: HTMLElement,
    clickCallback: (e: MouseEvent) => void,
    event: MouseEvent
  ): void {
    console.log('[task mouse up]');

    controller.abort();
    // if (this.shouldInsert) {
    //   selectedBoard.lists.splice(this.draggedListNewIndex, 0, this.draggedListData);
    //   this.#onMoved.next(true);
    //   this.shouldInsert = false;
    // } else {
    //   clickCallback(event);
    // }
    // this.draggedListData = null;
    // this.resetDraggingListStatus(listAtMousePosition);
  }

  //
  // getTaskDataById(id: string): TaskModel {
  //   for (const list of this.selectedBoard.lists) {
  //     for (const task of list.tasks) {
  //       if (task !== undefined && task.id === id) {
  //         return task;
  //       }
  //     }
  //   }
  //   return null;
  // }
  //
  // taskCleanup(taskId: string, listId: string) {
  //   this.selectedBoard.lists.forEach(list => {
  //     if (list.id !== listId) {
  //       list.tasks = list.tasks.filter(task => task.id !== taskId);
  //     }
  //   });
  // }
}
