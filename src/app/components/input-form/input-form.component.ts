import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit, AfterViewInit {

  @Output() textSubmissionAction = new EventEmitter();
  // tslint:disable-next-line:no-input-rename
  @Input('textToShow') textToShow: string;
  // tslint:disable-next-line:no-input-rename
  @Input('targetClass') targetClass: string;
  @ViewChild('textInput') textInputRef: ElementRef;
  @ViewChild('addTaskRef') addTaskRef: ElementRef;

  @HostListener(`document:click`, ['$event.target'])
  clickedOut(targetElement: HTMLElement): void {
    let openForms;
    if (!targetElement.classList.contains('add_task')
      && !targetElement.classList.contains(this.targetClass)
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

  onEnterPressed(event): void {
    if (event.key === 'Enter') {
      this.textSubmissionAction.emit({ text: this.textToShow, keep: true });
      this.textToShow = '';
    }
  }
}
