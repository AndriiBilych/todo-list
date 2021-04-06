import {Component, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.css']
})
export class TaskCreationComponent implements AfterViewInit {

  // tslint:disable-next-line:variable-name no-input-rename
  @Input('isAddingTask') _isAddingTask = true;
  @Output() stateChangeEvent = new EventEmitter();
  @Output() valueEvent = new EventEmitter();
  @ViewChild('textInput') textInputRef: ElementRef;

  text: string;

  constructor() {
    this.text = '';
  }

  ngAfterViewInit(): void {
      this.textInputRef.nativeElement.focus();
  }

  emitTaskCreatedEvent(): void {
    this.stateChangeEvent.emit(!this._isAddingTask);
    this.valueEvent.emit(this.text);
  }
}
