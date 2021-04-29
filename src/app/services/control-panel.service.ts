import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlPanelService {
  // tslint:disable-next-line:variable-name
  private _indexSource = new Subject<number>();
  // tslint:disable-next-line:variable-name
  private _deleteIndexSource = new Subject<number>();
  index$ = this._indexSource.asObservable();
  deleteIndex$ = this._deleteIndexSource.asObservable();

  constructor() {}

  setIndex(i: number): void {
    this._indexSource.next(i);
  }

  deleteIndex(i: number): void {
    this._deleteIndexSource.next(i);
  }
}
