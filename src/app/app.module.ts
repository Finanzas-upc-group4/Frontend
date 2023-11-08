import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistroSolicitudComponent } from './Components/registro-solicitud/registro-solicitud.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {CronogramaComponent} from "./Components/cronograma/cronograma.component";

@NgModule({
  declarations: [
    AppComponent,
    RegistroSolicitudComponent,
    CronogramaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
