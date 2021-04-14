import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, HostListener} from '@angular/core';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit, AfterViewInit {

  @Output() textValue = new EventEmitter();
  @ViewChild('textInput') textInputRef: ElementRef;
  text: string;

  @HostListener(`document:click`, ['$event.target'])
  clickedOut(targetElement: HTMLElement): void {
    // if (!targetElement.classList.contains('add_task')
    //   && !targetElement.classList.contains('open_form_to_add_task')
    //   && !targetElement.classList.contains('input_task')) {
    //   const openForms = this.elementRef.nativeElement.querySelectorAll('button.add_task');
    //   if (openForms.length > 0) {
    //     openForms.forEach(el => el.click());
    //   }
    // } else if (targetElement.classList.contains('list_title') && isNotNullOrUndefined(this.textInputRef)) {
    //   this.textInputRef.nativeElement.focus();
    // }
  }

  constructor(
    private elementRef: ElementRef
  ) {
    this.text = '';
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.textInputRef.nativeElement.focus();
  }

  emitTaskCreatedEvent(): void {
    this.textValue.emit(this.text);
    this.text = '';
  }

  onEnterPressed(event): void {
    if (event.key === 'Enter') {
      this.textValue.emit(this.text);
      this.text = '';
    }
  }

}
