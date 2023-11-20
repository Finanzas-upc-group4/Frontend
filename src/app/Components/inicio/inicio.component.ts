import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }



  registerOnClick() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    const email = this.formulario.value.email;
    const password = this.formulario.value.password;
    console.log('Formulario:', this.formulario.value);
    this.apiService.getUser(email).subscribe(
        (usuario) => {

          if (usuario.password === password) {
            localStorage.setItem('UserId', usuario.id);
            console.log('UserId:', localStorage.getItem('UserId'));
            this.router.navigate(['/registro-solicitud']);
          } else {

            alert('Contraseña incorrecta');
          }
        },
        (error) => {

          alert(error);
        }
    );
  }
}
