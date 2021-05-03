import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { ControlPanelService } from '../../services/control-panel.service';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  titles: { title: string, id: number }[];
  selectedIndex: number;
  isChangingName: boolean;

  @ViewChild('modal') modal: ElementRef;

  @HostListener('document:mousedown', ['$event.target'])
  onCloseModalClick(target): void {
    if (target.classList.contains('modal')) {
      this.modal.nativeElement.style.display = 'none';
    }
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event): void {
    event.preventDefault();
    if (event.target.classList.contains('board-title')) {
      this.isChangingName = !this.isChangingName;
    }
  }

  constructor(
    private readonly controlPanelService: ControlPanelService,
    private readonly dataService: DataService
  ) {
    this.titles = null;
    this.selectedIndex = 0;
    this.isChangingName = false;
    // this.modal = null;
  }

  ngOnInit(): void {
    this.controlPanelService.index$.subscribe( index => {
      this.selectedIndex = index;
    });

    this.dataService.getTitles().subscribe( data => {
      this.titles = data;
    });

  }

  onClick(i: number): void {
    this.controlPanelService.setIndex(i);
  }

  removeBoard(i: number): void {
    this.controlPanelService.deleteIndex(i);
    this.titles.splice(this.selectedIndex, 1);
    this.controlPanelService.setIndex(0);
    this.selectedIndex = 0;

    if (this.titles.length === 0) {
      this.createBoard();
    }
  }

  createBoard(): void {
    this.controlPanelService.setIndex(this.titles.length);
    this.titles.push({ title: 'New board', id: this.titles.length });
  }
}
