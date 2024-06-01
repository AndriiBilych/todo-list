import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { BoardStoreService } from './services/board-store.service';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';
import { take } from "rxjs/operators";
import { BoardModel } from "./models/BoardModel";

@Component({
  selector: 'app-root',
  template: `
    <app-control-panel></app-control-panel>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = 'Boards';

  constructor(
    private readonly dataService: DataService,
    private readonly boardStoreService: BoardStoreService
  ) {}

  ngOnInit(): void {
    this.dataService.getBoards$().pipe(take(1)).subscribe((boards: BoardModel[]) => {
      if (isNotNullOrUndefined(boards) && boards.length > 0) {
        this.boardStoreService.setBoards(boards);
      }
    });
  }
}
