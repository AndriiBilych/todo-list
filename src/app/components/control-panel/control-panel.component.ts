import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BoardModel} from '../../models/BoardModel';
import {BoardStoreService} from '../../services/board-store.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  isChangingName: boolean;

  selectedBoard: BoardModel;
  boards: BoardModel[];

  subscription: Subscription;

  @ViewChild('confirmationRef') confirmation: ElementRef;

  @HostListener('document:mousedown', ['$event.target'])
  onCloseModalClick(target): void {
    if (target.classList.contains('modal')) {
      this.confirmation.nativeElement.style.display = 'none';
    }
  }

  constructor(
    private readonly boardStoreService: BoardStoreService,
  ) {
    this.isChangingName = false;
    this.selectedBoard = null;
    this.boards = [];
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(this.boardStoreService.exampleBoards$.subscribe(data => this.boards = data));
  }

  onClick(id: string): void {
    this.boardStoreService.setExampleBoards(this.boards);
  }

  removeBoard(id: string): void {
    const index = this.boards.findIndex(({id: boardId}) => boardId === id);
    this.boards.splice(index, 1);
    this.boardStoreService.setExampleBoards(this.boards);
  }

  createBoard(): void {
    this.boards.push(new BoardModel('New Board'));
    this.boardStoreService.setExampleBoards(this.boards);
  }
}
