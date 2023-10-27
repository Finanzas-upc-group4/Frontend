import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistroDatosComponent } from './Components/registro-datos/registro-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroDatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
