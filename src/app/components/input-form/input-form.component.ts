import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  Input,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit, AfterViewInit, OnDestroy {

  static inputForm: InputFormComponent = null;

  @Output() textSubmissionAction = new EventEmitter();
  @Input() textToShow: string;
  @Input() targetClass: string;
  @ViewChild('input') inputRef: ElementRef;
  @ViewChild('button') buttonRef: ElementRef;

  // @HostListener(`document:click`, ['$event.target'])
  // clickedOut(targetElement: HTMLElement): void {
  //   const openForms = this.elementRef.nativeElement.querySelectorAll('button.add_task');
  //   if (!targetElement.classList.contains('add-task')
  //     && !targetElement.classList.contains(this.targetClass)
  //     && !targetElement.classList.contains('input-task')) {
  //     if (openForms.length > 0) {
  //       openForms.forEach(el => el.click());
  //     }
  //   }
  // }

  @HostListener('document:keydown.escape')
  pressedEscape(): void {
    this.buttonRef.nativeElement.click();
  }

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // setTimeout makes the code inside asynchronous, which prevents "NG0100: Expression has changed after it was checked" error
    setTimeout(() => {
      if (InputFormComponent.inputForm !== null) {
        InputFormComponent.inputForm.buttonRef.nativeElement.click();
      }
      InputFormComponent.inputForm = this;
    });
    this.inputRef.nativeElement.focus();
  }

  onEnterPressed(event): void {
    if (event.key === 'Enter') {
      this.textSubmissionAction.emit({ text: this.textToShow, keep: true });
      this.textToShow = '';
    }
  }

  ngOnDestroy(): void {
    InputFormComponent.inputForm = null;
  }
}
