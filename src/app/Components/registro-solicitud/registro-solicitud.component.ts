import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-registro-solicitud',
  templateUrl: './registro-solicitud.component.html',
  styleUrls: ['./registro-solicitud.component.css']
})
export class RegistroSolicitudComponent {
  constructor(private router: Router, private apiService: ApiService) {}
  formData: any = {
    monedaActual: 'dolares',
    fechaDesembolso: '',
    diaDePago: '',
  };
  RegresarInicio() { this.router.navigate(['/home']);}
  submitForm() {
    if (this.formData.creditCurrency === '' || this.formData.disbursementDate === '' || this.formData.payDay <= 0) {
      alert('Por favor complete todos los campos antes de enviar el formulario.');
      return;
    }
    // Generar un nombre único para el JSON
    const uniqueFileName = 'solicitud_' + Date.now() + '.json';

    // Crear un objeto JSON con los datos del formulario
    const jsonData = {
      monedaActual: this.formData.monedaActual,
      fechaDesembolso: this.formData.fechaDesembolso,
      diaDePago: this.formData.diaDePago,
      userId: Number(localStorage.getItem('UserId'))
    };
    this.apiService.postDatosRegister(jsonData).subscribe(
        (respuesta) => {
          console.log('Datos de solicitud enviados exitosamente:', respuesta);
          this.router.navigate(['/input-data-evaluation']);
        },
        (error) => {
          console.error('Error al enviar datos de solicitud:', error);
          // Aquí puedes mostrar un mensaje de error al usuario
        }
    );
    localStorage.setItem('solicitud', JSON.stringify(jsonData));
    localStorage.getItem('solicitud');
    localStorage.setItem('moneda', this.formData.monedaActual);
    const soli :any= (localStorage.getItem('solicitud'));
    console.log(jsonData);
    this.router.navigate(['/input-data-evaluation']);
  }

}
