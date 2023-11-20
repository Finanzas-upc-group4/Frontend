import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
@Component({
  selector: 'app-registro-datos',
  templateUrl: './registro-datos.component.html',
  styleUrls: ['./registro-datos.component.css']
})
export class RegistroDatosComponent {
  nombres: string = '';
  apellidos: string = '';
  dni: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  registrar() {
    const datosUsuario = {
      name: this.nombres,
      lastName: this.apellidos,
      dni: this.dni,
      email: this.email,
      password: this.password
    };

    this.apiService.postUser(datosUsuario).subscribe(
        (respuesta) => {
          console.log('Usuario registrado exitosamente:', respuesta);
          alert('Registro exitoso');
          this.router.navigateByUrl('/login');
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
        }
    );
  }

  iniciarSesion() {
    this.router.navigateByUrl('/login');
  }
}
