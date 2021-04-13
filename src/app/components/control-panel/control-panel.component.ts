import { Component, OnInit } from '@angular/core';
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

  constructor(
    private readonly controlPanelService: ControlPanelService,
    private readonly dataService: DataService
  ) {
    this.titles = null;
    this.selectedIndex = 0;
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
}
