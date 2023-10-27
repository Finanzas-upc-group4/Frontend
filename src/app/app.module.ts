import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EvaluacionResultadosComponenteComponent } from './Components/evaluacion-resultados-componente/evaluacion-resultados-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    EvaluacionResultadosComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
