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
import { CalculationService } from '../../services/calculation.service';

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
  @Output() removeListAction = new EventEmitter();
  @ViewChild('TitleRef') titleRef: ElementRef;
  @ViewChild('ListContainer') listContainer: ElementRef;
  #listDraggingService = inject(ListDraggingService);
  #calculationService = inject(CalculationService);

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
      this.#listDraggingService.initListMouseDownListener(this.titleRef.nativeElement, this.selectedBoard, this.listAtMousePosition, () => this.onClick());
    }
  }

  ngOnDestroy(): void {
    if (this.initListener) {
      this.titleRef.nativeElement.removeAllListeners();
    }
  }

  calculateBoundingInfo(): void {
    if (this.listContainer?.nativeElement && this.list?.id) {
      this.#calculationService.calculateBoundingInfoSingle(this.listContainer.nativeElement, this.list.id);
    }
  }

  onClick(): void {
    this.isChangingName = !this.isChangingName;
  }

  pushToArray(text: string): void {
    if (text.length > 0) {
      this.list.tasks.push(new TaskModel(text, this.list.tasks.length));
    }
  }
}
