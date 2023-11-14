import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegistroDatosComponent} from "./Components/registro-datos/registro-datos.component";


const routes: Routes = [
    {path: 'registrar-datos', component:RegistroDatosComponent},
    {path: 'login', component:RegistroDatosComponent},
    {path: 'register', component:RegistroDatosComponent},
]
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }