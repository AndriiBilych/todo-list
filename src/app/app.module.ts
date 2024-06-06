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
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageSectionComponent } from './components/homepage-section/homepage-section.component';
import { HomepageListItemComponent } from './components/homepage-list-item/homepage-list-item.component';
import { HomepageListButtonComponent } from './components/homepage-list-button/homepage-list-button.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    ControlPanelComponent,
    InputFormComponent,
    TaskComponent,
    GuideComponent,
    ColorPickerComponent,
    HomepageComponent,
    HomepageSectionComponent,
    HomepageListItemComponent,
    HomepageListButtonComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SimplebarAngularModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
