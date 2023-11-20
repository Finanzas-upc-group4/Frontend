import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {

  }
  logout() {
    this.router.navigate(['/login']);
  }
  Calcular() {
    this.router.navigate(['/registro-solicitud']);
  }
  historial(){
    this.router.navigate(['/historial']);
  }
}
