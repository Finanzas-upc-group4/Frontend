import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-evaluacion-resultados-componente',
  templateUrl: './evaluacion-resultados-componente.component.html',
  styleUrls: ['./evaluacion-resultados-componente.component.css']
})
export class EvaluacionResultadosComponenteComponent {
  resultadosIteraciones = JSON.parse(localStorage.getItem('resultadosIteraciones') || '[]');
  valorVehiculo: string = String(localStorage.getItem('VehicleValue'));
  porcentajeValorVehiculo: string = '100%';
  cuotaInicial: string = String(localStorage.getItem('InitialPayment'));
  porcentajeCuotaInicial: string = String(localStorage.getItem('porcentaje')+'%');
  montoPrestamo: string = String(this.resultadosIteraciones[0].saldo);
  porcentajeMontoPrestamo: string = String(100-Number(localStorage.getItem('porcentaje')))+'%';
  saldo: string = String(this.resultadosIteraciones[0].saldo);
  amortizacion: string = String(this.resultadosIteraciones[0].amortizacion);
  interes: string = String(this.resultadosIteraciones[0].interes);
  envioFisico: string = String(this.resultadosIteraciones[0].envioFisico);
  segDesgravem: string = String(this.resultadosIteraciones[0].seguroDesgravamen);
  cuotaMensual: string = String(this.resultadosIteraciones[0].cuotaTotal);
  seguroBien: string = String(this.resultadosIteraciones[0].seguroBien);
  constructor(private router: Router) {}
  onAnteriorClick() {
    // Navegar a la ruta correspondiente
    this.router.navigate(['/ruta-anterior']);
  }

  onIrCronogramaClick() {
    // Navegar a la ruta correspondiente
    this.router.navigate(['/cronograma']);
  }
}
