import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, HostListener, Input} from '@angular/core';
import { isNotNullOrUndefined } from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit, AfterViewInit {

  @Output() textValue = new EventEmitter();
  // tslint:disable-next-line:no-input-rename
  @Input('textToShow') textToShow: string;
  @ViewChild('textInput') textInputRef: ElementRef;
  @HostListener(`document:click`, ['$event.target'])
  clickedOut(targetElement: HTMLElement): void {
    let openForms;
    if (!targetElement.classList.contains('add_task')
      && !targetElement.classList.contains('task_title')
      && !targetElement.classList.contains('input_task')) {
      openForms = this.elementRef.nativeElement.querySelectorAll('button.add_task');
      if (openForms.length > 0) {
        openForms.forEach(el => el.click());
      }
    }
  }

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.textInputRef.nativeElement.focus();
  }

  emitTaskCreatedEvent(): void {
    this.textValue.emit(this.textToShow);
  }

  onEnterPressed(event): void {
    if (event.key === 'Enter') {
      this.textValue.emit(this.textToShow);
    }
  }
}
