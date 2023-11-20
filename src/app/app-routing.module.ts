import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { InputDataEvaluationComponent } from './input-data-evaluation/input-data-evaluation.component';
import {RegistroDatosComponent} from "./Components/registro-datos/registro-datos.component";
import {RegistroSolicitudComponent} from "./Components/registro-solicitud/registro-solicitud.component";
import {
    EvaluacionResultadosComponenteComponent
} from "./Components/evaluacion-resultados-componente/evaluacion-resultados-componente.component";
import {CronogramaComponent} from "./Components/cronograma/cronograma.component";
import {InicioComponent} from "./Components/inicio/inicio.component";
import {HomeComponent} from "./Components/home/home.component";
import {HistorialComponent} from "./Components/historial/historial.component";

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'home', component: HomeComponent},
    {path: 'historial', component: HistorialComponent},
    {path: 'login', component: InicioComponent},
    { path: 'input-data-evaluation', component: InputDataEvaluationComponent },
    {path: 'register', component:RegistroDatosComponent},
    {path: 'registro-solicitud', component: RegistroSolicitudComponent},
    {path: 'resultado-evaluacion', component: EvaluacionResultadosComponenteComponent},
    {path:'cronograma', component: CronogramaComponent},
    {path: 'login', component: InicioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
