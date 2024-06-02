import { Component, Input } from '@angular/core';
import { BoardModel } from '../../models/BoardModel';
import { BoardStoreService } from '../../services/board-store.service';
import { filter, map } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-homepage',
  template: `
    <app-homepage-section [section$]="exampleSection$"></app-homepage-section>
    <app-homepage-section [section$]="userSection$"></app-homepage-section>
  `,
})
export class HomepageComponent {
  @Input() loadBoard: (id: string) => void;
  @Input() createBoard: () => void;

  exampleSection$ = this.boardStoreService.exampleBoards$.pipe(
    filter((boards: BoardModel[] | null) => isNotNullOrUndefined(boards)),
    map((boards) => ({
      id: '0',
      title: 'Example boards',
      description: 'Created by developer',
      additionAllowed: false,
      boards
    }))
  );

  userSection$ = this.boardStoreService.userBoards$.pipe(
    filter((boards: BoardModel[] | null) => isNotNullOrUndefined(boards)),
    map((boards) => ({
      id: '1',
      title: 'Your boards',
      description: 'Created by you',
      additionAllowed: true,
      boards
    }))
  );

  constructor(
    private readonly boardStoreService: BoardStoreService
  ) {}
}
