import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { ListComponent } from './components/list/list.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimplebarAngularModule } from 'simplebar-angular';
import { InputFormComponent } from './components/input-form/input-form.component';
import { TaskComponent } from './components/task/task.component';
import { GuideComponent } from './components/guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    ControlPanelComponent,
    InputFormComponent,
    TaskComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
