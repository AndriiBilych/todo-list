import {Component, HostListener, OnInit} from '@angular/core';
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

  @HostListener('contextmenu', ['$event'])
  onRightClick(event): void {
    event.preventDefault();
    if (event.target.classList.contains('title')) {
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
    if (this.titles.length - 1 > 0) {
      this.controlPanelService.deleteIndex(i);
      this.titles.splice(this.selectedIndex, 1);
      this.controlPanelService.setIndex(0);
      this.selectedIndex = 0;
    }
  }

  createBoard(): void {
    this.controlPanelService.setIndex(this.titles.length);
    this.titles.push({ title: 'New board', id: this.titles.length });
  }
}
