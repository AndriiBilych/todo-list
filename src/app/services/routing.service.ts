import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private readonly router: Router,
  ) {}

  routeToEditBoard(id: string): void {
    this.router.navigate(['board', id]);
  }

  routeToCreateBoard(): void {
    this.router.navigate(['board']);
  }

}
