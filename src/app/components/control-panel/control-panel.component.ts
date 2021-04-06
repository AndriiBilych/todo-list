import { Component, OnInit } from '@angular/core';
import {ControlPanelService} from '../../services/control-panel.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  personalBoardLoaded = true;

  constructor(private readonly controlPanelService: ControlPanelService) { }

  ngOnInit(): void {
  }

  populateBoardWithFakeData(): void {
    this.controlPanelService.getDataForBoard();
    this.personalBoardLoaded = false;
  }

  populateBoardWithPersonalData(): void {
    this.controlPanelService.sendFlag();
    this.personalBoardLoaded = true;
  }
}
