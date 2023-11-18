import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro-solicitud',
  templateUrl: './registro-solicitud.component.html',
  styleUrls: ['./registro-solicitud.component.css']
})
export class RegistroSolicitudComponent {
  constructor(private router: Router) {
  }
  formData: any = {
    creditCurrency: 'dolares',
    disbursementDate: '',
    payDay: '',
  };

  submitForm() {
    // Generar un nombre único para el JSON
    const uniqueFileName = 'solicitud_' + Date.now() + '.json';

    // Crear un objeto JSON con los datos del formulario
    const jsonData = {
      creditCurrency: this.formData.creditCurrency,
      disbursementDate: this.formData.disbursementDate,
      payDay: this.formData.payDay,
      UserId: 1,
    };
    localStorage.setItem('solicitud', JSON.stringify(jsonData));
    localStorage.getItem('solicitud');
    localStorage.setItem('moneda', this.formData.creditCurrency);
    //console.log("esto es desde el local storage: "+localStorage.getItem('solicitud'));
    const soli :any= (localStorage.getItem('solicitud'));
    //const soli2 = JSON.parse(soli);
    //localStorage.removeItem('solicitud')
    //console.log("esto es desde el json despues del local" + soli);
    //console.log(soli2.payDay)
    // Imprimir el JSON en la consola para verificar
    console.log(jsonData);
    this.router.navigate(['/input-data-evaluation']);
  }

}
