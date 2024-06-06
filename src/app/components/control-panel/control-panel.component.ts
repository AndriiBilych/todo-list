import { Component, ElementRef, ViewChild } from '@angular/core';
import { BoardStoreService } from '../../services/board-store.service';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html'
})
export class ControlPanelComponent {
  @ViewChild('DeleteModal') confirmation: ElementRef;
  #isChangingName = false;

  constructor(
    public readonly boardStoreService: BoardStoreService,
    public readonly routingService: RoutingService
  ) {
    this.#isChangingName = false;
  }

  get isChangingName(): boolean {
    return this.#isChangingName;
  }

  removeBoard(id: string): void {
    this.boardStoreService.removeBoard(id);
    this.routingService.routeToHomepage();
  }

  toggleIsChangingName(force?: boolean): void {
    this.#isChangingName = force ?? !this.#isChangingName;
  }
}
