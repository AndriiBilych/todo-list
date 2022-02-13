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

  constructor(
    private readonly boardStoreService: BoardStoreService,
  ) {
    this.isChangingName = false;
    this.selectedBoard = null;
    this.boards = [];
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(this.boardStoreService.selectedBoard$.subscribe(board => this.selectedBoard = board));
    this.subscription.add(this.boardStoreService.boards$.subscribe(data => this.boards = data));
  }

  @HostListener('document:mousedown', ['$event.target'])
  onCloseModalClick(target): void {
    if (target.classList.contains('modal')) {
      this.confirmation.nativeElement.style.display = 'none';
    }
  }

  onClick(uuid: string): void {
    this.boardStoreService.setBoards(this.boards);
    this.boardStoreService.setSelectedBoard(this.boards.find(b => b.uid === uuid));
  }

  removeBoard(uuid: string): void {
    const index = this.boards.findIndex(b => b.uid === uuid);
    this.boards.splice(index, 1);
    this.boardStoreService.setBoards(this.boards);
    if (this.boards.length !== 0) {
      this.boardStoreService.setSelectedBoard(this.boards[this.boards.length - 1]);
    }

    this.boardStoreService.setSelectedBoard(null);
  }

  createBoard(): void {
    this.boards.push(new BoardModel('New Board'));
    this.boardStoreService.setBoards(this.boards);
    this.boardStoreService.setSelectedBoard(this.boards[this.boards.length - 1]);
  }
}
