import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { DisplaySWAPIComponent } from './display-swapi/display-swapi.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySWAPIComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
