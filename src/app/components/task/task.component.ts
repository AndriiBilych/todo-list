import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task',
  template: `
    <div class="mt-2 mx-3.5 rounded cursor-pointer" *ngIf="task" [id]="task.id"
         [class.task-container-selected]="task.selected">
      <div #Task class="task flex justify-between rounded break-words bg-blue-100 h-auto p-1 group border-2 border-blue-100 hover:border-black"
           [id]="task.id" *ngIf="!task?.selected">
        <ng-container *ngIf="!isModifyingTask; else textInput">
          <div class="pl-2.5">{{task.content}}</div>
          <button (click)="removeAction.emit()"
                  class="remove-task-button invisible border-none mb-auto"
          >&times;</button>
        </ng-container>
        <ng-template #textInput>
          <app-input-form
            (textSubmissionAction)="toggle($event)"
            [textToShow]="task.content"
          ></app-input-form>
        </ng-template>
      </div>
    </div>
  `,
  styles: [`
    .task-container-selected {
      height: 30px;
      background-color: var(--highlighted);
    }

    .group:hover .remove-task-button {
      visibility: visible;
    }
  `]
})
export class TaskComponent implements AfterViewInit {

  @Input() task: TaskModel;
  @Output() removeAction = new EventEmitter();
  @ViewChild('Task') taskRef: ElementRef;

  isModifyingTask = false;

  ngAfterViewInit(): void {
    if (!this.taskRef?.nativeElement) {
      throw new Error('Task ref not found');
    }

    this.taskRef.nativeElement.addEventListener('contextmenu', this.onRightClick.bind(this));
  }

  onRightClick(event: Event): void {
    event.preventDefault();
    this.isModifyingTask = !this.isModifyingTask;
  }

  toggle(event: { text: string, keep: boolean }): void {
    this.isModifyingTask = !this.isModifyingTask;
    this.task.content = event.text.length > 0 ? event.text : this.task.content;
  }
}
