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
import { IList } from '../../models/interfaces/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
    .list {
      max-height: calc(75vh + 5px);
    }

    ngx-simplebar {
      max-height: inherit;
    }

    .group:hover .remove-list-button {
      display: block;
    }
  `]
})
export class ListComponent implements AfterViewInit {
  options = { autoHide: false};
  isAddingTask: boolean;
  isChangingName: boolean;

  @Input() list: IList;
  @Output() closeListAction = new EventEmitter();
  @ViewChild('TitleRef') titleRef: ElementRef;

  constructor(
    public readonly elementRef: ElementRef,
  ) {
    this.isAddingTask = false;
    this.isChangingName = false;
  }

  ngAfterViewInit(): void {
    if (!this.titleRef?.nativeElement) {
      throw new Error('Task ref not found');
    }

    this.titleRef.nativeElement.addEventListener('contextmenu', this.onRightClick.bind(this));
  }

  onRightClick(event: Event): void {
    event.preventDefault();
    this.isChangingName = !this.isChangingName;
  }

  pushToArray(text: string): void {
    if (text.length > 0) {
      this.list.tasks.push(new TaskModel(text, this.list.tasks.length));
    }
  }
}
