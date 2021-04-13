import {Component, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.css']
})
export class TaskCreationComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line:variable-name no-input-rename
  @Input('isAddingTask') _isAddingTask = false;
  @Output() valueEvent = new EventEmitter();
  @ViewChild('textInput') textInputRef: ElementRef;
  @ViewChild('buttonRef') buttonRef: ElementRef;

  text: string;

  @HostListener(`document:click`, ['$event.target'])
  clickedOut(targetElement: HTMLElement): void {
    if (!targetElement.classList.contains('add_task')
      && !targetElement.classList.contains('open_form_to_add_task')
      && !targetElement.classList.contains('input_task')) {
      const openForms = this.elementRef.nativeElement.querySelectorAll('button.add_task');
      const countOfOpenForms = openForms.length;
      if (countOfOpenForms > 0) {
        openForms.forEach(el => {
          el.click();
        });
      }
    }
  }

  constructor(
    private readonly renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.text = '';
  }

  ngAfterViewInit(): void {
    // this.textInputRef.nativeElement.focus();

    // TODO search all active components and close and after open self
  }

  emitTaskCreatedEvent(): void {
    this._isAddingTask = !this._isAddingTask;
    this.valueEvent.emit(this.text);
    this.text = '';
  }

  ngOnInit(): void {
  }
}
