import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  modal: HTMLElement;

  @HostListener('document:mousedown', ['$event.target'])
  onClick(target): void {
    if (target.classList.contains('modal')) {
      this.modal.style.display = 'none';
    }
  }

  constructor() {
    this.modal = null;
  }

  ngOnInit(): void {
    this.modal = document.getElementById('modal');
  }
}
