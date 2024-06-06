import { Component, Input } from '@angular/core';
import { BoardModel } from '../../models/board.model';
import { BoardStoreService } from '../../services/board-store.service';
import { filter, map } from 'rxjs/operators';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-homepage',
  template: `
    <div class="pt-14">
      <app-homepage-section [section$]="section$"></app-homepage-section>
    </div>
  `,
})
export class HomepageComponent {
  @Input() loadBoard: (id: string) => void;
  @Input() createBoard: () => void;


  section$ = this.boardStoreService.boards$.pipe(
    filter((boards: BoardModel[] | null) => isNotNullOrUndefined(boards)),
    map((boards) => ({
      id: '0',
      title: 'All boards',
      description: 'Explore or create your own board',
      additionAllowed: true,
      boards
    }))
  );

  constructor(
    private readonly boardStoreService: BoardStoreService
  ) {}
}
