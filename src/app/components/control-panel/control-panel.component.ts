import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { ControlPanelService } from '../../services/control-panel.service';
import { DataService } from '../../services/data-service.service';
import {BoardModel} from '../../models/BoardModel';
import {BoardStoreService} from '../../services/board-store.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  // selectedIndex: number;
  // isChangingName: boolean;

  selectedBoard: BoardModel;
  boards: BoardModel[];

  subscription: Subscription;

  // @ViewChild('modal') modal: ElementRef;

  constructor(
    private readonly controlPanelService: ControlPanelService,
    private readonly boardStoreService: BoardStoreService,
    private readonly dataService: DataService
  ) {
    // this.titles = null;
    // this.selectedIndex = 0;
    // this.isChangingName = false;
    // this.modal = null;
    this.selectedBoard = null;
    this.boards = [];
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    // this.controlPanelService.index$.subscribe( index => {
    //   this.selectedIndex = index;
    // });
    //
    // this.dataService.getTitles().subscribe( data => {
    //   this.titles = data;
    // });

    this.subscription.add(this.boardStoreService.selectedBoard$.subscribe(board => this.selectedBoard = board));
    this.subscription.add(this.boardStoreService.boards$.subscribe(data => this.boards = data));
  }

  // @HostListener('document:mousedown', ['$event.target'])
  // onCloseModalClick(target): void {
  //   if (target.classList.contains('modal')) {
  //     this.modal.nativeElement.style.display = 'none';
  //   }
  // }
  //
  // @HostListener('contextmenu', ['$event'])
  // onRightClick(event): void {
  //   event.preventDefault();
  //   if (event.target.classList.contains('board-title')) {
  //     this.isChangingName = !this.isChangingName;
  //   }
  // }

  onClick(uuid: string): void {
    this.boardStoreService.setBoards(this.boards);
    this.boardStoreService.setSelectedBoard(this.boards.find(b => b.uuid === uuid));
  }

  // removeBoard(i: number): void {
  //   this.controlPanelService.deleteIndex(i);
  //   this.titles.splice(this.selectedIndex, 1);
  //   this.controlPanelService.setIndex(0);
  //   this.selectedIndex = 0;
  //
  //   if (this.titles.length === 0) {
  //     this.createBoard();
  //   }
  // }
  //
  // createBoard(): void {
  //   this.controlPanelService.setIndex(this.titles.length);
  //   this.titles.push({ title: 'New board', id: this.titles.length });
  // }
}
