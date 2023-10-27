import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputDataEvaluationComponent } from './input-data-evaluation/input-data-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDataEvaluationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
