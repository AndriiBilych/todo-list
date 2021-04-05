import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.css']
})
export class TaskCreationComponent implements OnInit {

  // tslint:disable-next-line:variable-name no-input-rename
  @Input('isAddingTask') _isAddingTask = true;
  @Output() stateChangeEvent = new EventEmitter();
  @Output() valueEvent = new EventEmitter();

  text: string;

  constructor() {
    this.text = '';
  }

  ngOnInit(): void {
      document.getElementById('textInput').focus();
  }

  emitTaskCreatedEvent(): void {
    this.stateChangeEvent.emit(!this._isAddingTask);
    this.valueEvent.emit(this.text);
  }
}
