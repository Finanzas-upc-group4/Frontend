import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistroSolicitudComponent } from './Components/registro-solicitud/registro-solicitud.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {CronogramaComponent} from "./Components/cronograma/cronograma.component";
import {MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { InputDataEvaluationComponent } from './input-data-evaluation/input-data-evaluation.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { EvaluacionResultadosComponenteComponent } from './Components/evaluacion-resultados-componente/evaluacion-resultados-componente.component';
import { RegistroDatosComponent } from './Components/registro-datos/registro-datos.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './Components/home/home.component';
import { HistorialComponent } from './Components/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroSolicitudComponent,
    CronogramaComponent,
    InputDataEvaluationComponent,
    InicioComponent,
    EvaluacionResultadosComponenteComponent,
    RegistroDatosComponent,
    HomeComponent,
    HistorialComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatIconModule,
        MatButtonModule,
        AppRoutingModule,
        HttpClientModule,
        NgOptimizedImage,
        ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
