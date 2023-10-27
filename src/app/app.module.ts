import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroSolicitudComponent } from './Components/registro-solicitud/registro-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroSolicitudComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
