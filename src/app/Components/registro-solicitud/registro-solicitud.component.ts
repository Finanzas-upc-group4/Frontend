import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-solicitud',
  templateUrl: './registro-solicitud.component.html',
  styleUrls: ['./registro-solicitud.component.css']
})
export class RegistroSolicitudComponent {
  formData: any = {
    creditCurrency: 'dolares'
  };

  submitForm() {
    console.log(this.formData);
  }
}
