import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BoardStoreService } from '../../services/board-store.service';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
})
export class ControlPanelComponent {
  #isChangingName = false;

  @ViewChild('DeleteModal') confirmation: ElementRef;

  constructor(
    public readonly boardStoreService: BoardStoreService,
    public readonly routingService: RoutingService,
  ) {
    this.#isChangingName = false;
  }

  removeBoard(id: string): void {
    this.boardStoreService.removeBoard(id);
    this.routingService.routeToHomepage();
  }

  toggleIsChangingName(force?: boolean): void {
    this.#isChangingName = force ?? !this.#isChangingName;
  }

  get isChangingName(): boolean {
    return this.#isChangingName;
  }
}
