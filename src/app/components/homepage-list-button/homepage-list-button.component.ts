import { Component } from '@angular/core';
import { RoutingService } from "../../services/routing.service";

@Component({
  selector: 'app-homepage-list-button',
  template: `
    <li class="px-4 py-6 grid grid-cols-1 sm:px-32 xl:px-48 2xl:px-52 h-32 rounded-lg hover:bg-blue-100 cursor-pointer"
        (click)="routingService.routeToCreateBoard()">
      <span class="flex justify-center items-center font-medium text-lg leading-6 text-gray-900 bg-blue-100 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="h-6 mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
        Add board
      </span>
    </li>
  `,
})
export class HomepageListButtonComponent {
  constructor(
    public readonly routingService: RoutingService
  ) {}
}
