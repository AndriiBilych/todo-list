import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BoardModel } from '../../models/board.model';
import { BoardStoreService } from '../../services/board-store.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  #isChangingName = false;
  selectedBoard: BoardModel;

  @ViewChild('confirmationRef') confirmation: ElementRef;

  @HostListener('document:mousedown', ['$event.target'])
  onCloseModalClick(target): void {
    if (target.classList.contains('modal')) {
      this.confirmation.nativeElement.style.display = 'none';
    }
  }

  constructor(
    public readonly boardStoreService: BoardStoreService,
  ) {
    this.#isChangingName = false;
    this.selectedBoard = null;
  }

  ngOnInit(): void {
  }

  removeBoard(id: string): void {
    // this.boardStoreService.setExampleBoards(this.boards);
  }

  toggleIsChangingName(force?: boolean): void {
    this.#isChangingName = force ?? !this.#isChangingName;
  }

  get isChangingName(): boolean {
    return this.#isChangingName;
  }
}
