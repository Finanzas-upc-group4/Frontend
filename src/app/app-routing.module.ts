import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { InputDataEvaluationComponent } from './input-data-evaluation/input-data-evaluation.component';
import {RegistroDatosComponent} from "./Components/registro-datos/registro-datos.component";

const routes: Routes = [
    { path: 'input-data-evaluation', component: InputDataEvaluationComponent },
    {path: 'registrar-datos', component:RegistroDatosComponent},
    {path: 'login', component:RegistroDatosComponent},
    {path: 'register', component:RegistroDatosComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
