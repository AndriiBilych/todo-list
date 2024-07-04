import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit, OnDestroy, inject
} from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { IList } from '../../models/interfaces/list.interface';
import { ListDraggingService } from '../../services/list-dragging.service';
import { BoardModel } from '../../models/board.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
    .list {
      max-height: calc(75vh + 5px);
    }

    .list-placeholder {
      width: calc(100% - .85rem);
    }

    .group:hover .remove-list-button {
      display: block;
    }
  `]
})
export class ListComponent implements AfterViewInit, OnDestroy {
  isAddingTask: boolean;
  isChangingName: boolean;

  @Input() list: IList;
  @Input() selectedBoard: BoardModel | null = null;
  @Input() listAtMousePosition: HTMLElement | null = null;
  @Input() hidden = false;
  @Input() initListener = false;
  @Output() closeListAction = new EventEmitter();
  @ViewChild('TitleRef') titleRef: ElementRef;
  #listDraggingService = inject(ListDraggingService);

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

    if (this.initListener && this.selectedBoard && this.listAtMousePosition) {
      console.log('ngAfterViewInit', this.titleRef.nativeElement);
      this.#listDraggingService.initListMouseDownListener(this.titleRef.nativeElement, this.selectedBoard, this.listAtMousePosition);
    }

    this.titleRef.nativeElement.addEventListener('contextmenu', this.onRightClick.bind(this));
  }

  ngOnDestroy(): void {
    if (this.initListener) {
      this.titleRef.nativeElement.removeAllListeners();
    }
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
