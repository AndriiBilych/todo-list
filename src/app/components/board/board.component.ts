import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener, inject,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { BoardModel } from '../../models/board.model';
import { ListModel } from '../../models/list.model';
import { BoardStoreService } from '../../services/board-store.service';
import { combineLatest } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { ReactiveComponent } from '../../tools/reactive';
import { RoutingService } from '../../services/routing.service';
import { CalculationService } from '../../services/calculation.service';
import { ListDraggingService } from '../../services/list-dragging.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [`
    .board {
      height: calc(100vh - 3.5rem);
    }
  `]
})
export class BoardComponent extends ReactiveComponent implements OnInit, OnDestroy {

  selectedBoard: BoardModel;
  selectedTaskData: TaskModel;
  currentIndex: number;

  isAddingList = false;
  isDraggingTask = false;
  // isDraggingBoard = false;
  @ViewChild('FakeTask') fakeTask: ElementRef;
  @ViewChild('board') boardRef: ElementRef;
  @ViewChild('ListAtMousePosition') listAtMousePosition: ElementRef;

  mouseStartingX: number;
  scrollSpeed = 10;
  #scrollLeft = 0;
  @ViewChildren(ListComponent)
  lists: QueryList<ListComponent>;

  listDraggingService = inject(ListDraggingService);
  #calculationService = inject(CalculationService);

  constructor(
    private readonly boardStoreService: BoardStoreService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly routingService: RoutingService
  ) {
    super();
    this.mouseStartingX = null;
    this.selectedBoard = null;
    this.currentIndex = null;
  }

  ngOnInit(): void {
    combineLatest([
      this.activatedRoute.params,
      this.boardStoreService.boards$.pipe(
        filter(isNotNullOrUndefined),
        map((boards: BoardModel[] | null) => boards.map((board) => {
          board.lists.map((list: ListModel) => {
            list.id = 'list' + list.id;
            return list;
          });
          return board;
        })),
      )
    ]).pipe(this.takeUntil()).subscribe(([{ id }, boards]) => {
      const board = boards.find(({ id: boardId }) => boardId === id);
      if (board === undefined) {
        this.routingService.routeToNotFound();
      }
      this.boardStoreService.selectBoard(board);
    });

    this.boardStoreService.selectedBoard$.pipe(
      filter((board: BoardModel) => isNotNullOrUndefined(board)),
      this.takeUntil()
    ).subscribe((board: BoardModel) => {
      this.selectedBoard = board;
      this.initBoundingInfo();
    });

    this.listDraggingService.onMoved$.pipe(this.takeUntil()).subscribe(() => this.initBoundingInfo());
  }

  initBoundingInfo() {
    if (this.selectedBoard.lists.length > 0) {
      const interval = setInterval(() => {
        if (this.lists.length === this.selectedBoard.lists.length) {
          this.calculateBoundingInfoForAll();
          clearInterval(interval);
        }
      }, 50);
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.boardStoreService.selectBoard(null);
  }

  @HostListener('document:wheel', ['$event'])
  onWheel(event: any): void {
    const target = event?.target;

    if (target && target.isEqualNode(this.boardRef.nativeElement)) {
      this.calculateBoundingInfoForAll();
      if (!event.shiftKey) {
        window.scrollBy({ left: event.deltaY });
      }
    }
  }

  @HostListener('document:mousedown')
  onMousedown(): void {
    this.#scrollLeft = window.scrollX;
  }

  @HostListener('document:mouseup')
  onMouseup(): void {
    if (window.scrollX !== this.#scrollLeft) {
      this.calculateBoundingInfoForAll();
    }
  }

  calculateBoundingInfoForAll(): void {
    this.#calculationService.listsBoundingInfo.clear();
    this.lists.forEach((list: ListComponent) => list.calculateBoundingInfo());
  }

  removeList(index: number): void {
    const removed = this.selectedBoard.lists.splice(index, 1);
    const length = this.lists.length;
    const interval = setInterval(() => {
      if (this.lists.length === length - 1) {
        this.#calculationService.removeBoundingInfo(removed[0].id);
        this.calculateBoundingInfoForAll();
        clearInterval(interval);
      }
    }, 50);
  }

  pushToArray(text: string): void {
    this.selectedBoard.lists.push(new ListModel(text));
  }
}

