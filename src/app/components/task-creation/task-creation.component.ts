import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener
} from '@angular/core';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.css']
})
export class TaskCreationComponent implements OnInit {

  // tslint:disable-next-line:variable-name no-input-rename
  @Input('isAddingTask') _isAddingTask = false;
  @Output() valueEvent = new EventEmitter();
  @ViewChild('textInput') textInputRef: ElementRef;
  @ViewChild('openAddTaskFormRef') openAddTaskFormRef: ElementRef;
  @ViewChild('addTaskRef') addTaskRef: ElementRef;

  text: string;

  @HostListener(`document:click`, ['$event.target'])
  clickedOut(targetElement: HTMLElement): void {
    if (!targetElement.classList.contains('add_task')
      && !targetElement.classList.contains('open_form_to_add_task')
      && !targetElement.classList.contains('input_task')) {
      const openForms = this.elementRef.nativeElement.querySelectorAll('button.add_task');
      if (openForms.length > 0) {
        openForms.forEach(el => el.click());
      }
    } else if (targetElement.classList.contains('open_form_to_add_task') && isNotNullOrUndefined(this.textInputRef)) {
        this.textInputRef.nativeElement.focus();
    }
  }

  constructor(
    private readonly renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.text = '';
  }

  ngOnInit(): void {}

  emitTaskCreatedEvent(): void {
    this._isAddingTask = !this._isAddingTask;
    this.valueEvent.emit(this.text);
    this.text = '';
  }

  onEnterPressed(event): void {
    if (event.key === 'Enter') {
      this.valueEvent.emit(this.text);
      this.text = '';
    }
  }
}
