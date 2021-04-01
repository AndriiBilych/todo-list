import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-container',
  templateUrl: './vertical-container.component.html',
  styleUrls: ['./vertical-container.component.css']
})
export class VerticalContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array(n: number): number[] {
    return Array(n);
  }
}
