import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalContainerComponent } from './components/horizontal-container/horizontal-container.component';
import { VerticalContainerComponent } from './components/vertical-container/vertical-container.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskCreationComponent } from './components/task-creation/task-creation.component';
import { ListCreationComponent } from './components/list-creation/list-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalContainerComponent,
    VerticalContainerComponent,
    ControlPanelComponent,
    TaskCreationComponent,
    ListCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
