import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing.service';
import { BoardStoreService } from '../../services/board-store.service';

@Component({
  selector: 'app-homepage-list-button',
  template: `
    <li class="px-4 py-6 grid grid-cols-2 sm:grid-cols-5 sm:gap-4 sm:px-0 h-32 rounded-lg hover:bg-blue-100 cursor-pointer"
        (click)="createBoard()">
      <span class="flex justify-center items-center font-medium text-lg leading-6 sm:col-span-2 text-gray-900 bg-blue-100 rounded-lg">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="h-6 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
        Add board
      </span>
      <span class="flex justify-center items-center sm:col-span-3">
        <span class="mt-1 text-sm leading-6 text-gray-700 ellipsis-box">Create a new board. Test it out. Saved only locally in memory.</span>
      </span>
    </li>
  `,
})
export class HomepageListButtonComponent {
  constructor(
    public readonly routingService: RoutingService,
    public readonly boardStoreService: BoardStoreService
  ) {}

  createBoard(): void {
    const id = this.boardStoreService.createBoard();
    this.routingService.routeToEditBoard(id);
  }
}
