import {Component, Input} from '@angular/core';
import {IBoard} from "../../models/interfaces/board.interface";

@Component({
  selector: 'app-homepage-list-item',
  template: `
    <li class="px-4 py-6 grid grid-cols-2 sm:grid-cols-5 sm:gap-4 sm:px-0 h-32 rounded-lg hover:bg-blue-100 cursor-pointer">
      <span class="flex justify-center items-center font-medium text-lg leading-6 sm:col-span-2 text-gray-900 bg-blue-100 rounded-lg">{{ board.title }}</span>
      <span class="flex justify-center items-center sm:col-span-3">
        <span class="mt-1 text-sm leading-6 text-gray-700 ellipsis-box">{{ board.description }}</span>
      </span>
    </li>
  `,
})
export class HomepageListItemComponent {
  @Input()
  board: IBoard;
}
