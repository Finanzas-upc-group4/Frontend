import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { InputDataEvaluationComponent } from './input-data-evaluation/input-data-evaluation.component'; 

const routes: Routes = [
    { path: 'input-data-evaluation', component: InputDataEvaluationComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
