import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('textValue') textValue: string;
  // tslint:disable-next-line:no-output-rename
  @Output('removeClicked') removeAction = new EventEmitter();

  isModifyingTask: boolean;
  constructor() {
    this.isModifyingTask = false;
  }

  ngOnInit(): void { }

}
