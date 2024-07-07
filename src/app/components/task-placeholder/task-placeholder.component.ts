import { Component, Input } from '@angular/core';

import { ITask } from '../../models/interfaces/task.interface';

@Component({
  selector: 'app-task-placeholder',
  template: `
    @if (task) {
      <div class="mt-2 mx-3.5 rounded cursor-pointer">
        <div class="task flex justify-between rounded break-words bg-blue-100 h-auto p-1 group border-2 border-blue-100 hover:border-black">
          <div class="pl-2.5">{{ task.content }}</div>
        </div>
      </div>
      <div [class.hidden]="!hidden"
           class="task-placeholder absolute top-0 left-0 h-full ml-1.5 bg-gray-100 rounded-xl"
      ></div>
    }
  `,
})
export class TaskPlaceholderComponent {
  @Input() task: ITask;
  @Input() hidden = false;
}
