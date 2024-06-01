import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {DataService} from './services/data-service.service';
import {BoardStoreService} from './services/board-store.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';


@Component({
  selector: 'app-root',
  template: `
    <app-control-panel></app-control-panel>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TodoList';

  subscription: Subscription;

  constructor(
    private readonly dataService: DataService,
    private readonly boardStoreService: BoardStoreService
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    this.subscription.add(this.dataService.getBoards().subscribe( data => {
      if (isNotNullOrUndefined(data) && data.length > 0) {
        this.boardStoreService.setBoards(data);
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
