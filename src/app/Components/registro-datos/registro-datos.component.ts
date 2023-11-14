import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-registro-datos',
  templateUrl: './registro-datos.component.html',
  styleUrls: ['./registro-datos.component.css']
})
export class RegistroDatosComponent {

  constructor(private router: Router){}


  registrar(){
    this.router.navigateByUrl('/register');
  }
  iniciarSesion(){
    this.router.navigateByUrl('/login');
  }
}
