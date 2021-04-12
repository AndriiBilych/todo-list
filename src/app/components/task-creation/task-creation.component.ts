import {Component, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit} from '@angular/core';

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

  constructor() {
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
