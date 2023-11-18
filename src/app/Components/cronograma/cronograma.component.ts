import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent {
  resultadosIteraciones = JSON.parse(localStorage.getItem('resultadosIteraciones') || '[]');
  results = new MatTableDataSource(this.resultadosIteraciones)
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  datos = [
    { numero_pago: 1, fecha: "0/0/0/", saldo: 0, interes: 0, seguro_desg: 0, seguro_bien: 0, amortizacion: 0, envio_fisico: "0/0/0/", cuota: 0 },
    { numero_pago: 2, fecha: "0/0/0/", saldo: 0, interes: 0, seguro_desg: 0, seguro_bien: 0, amortizacion: 0, envio_fisico: "0/0/0/", cuota: 0},
    { numero_pago: 3, fecha: "0/0/0/", saldo: 0, interes: 0, seguro_desg: 0, seguro_bien: 0, amortizacion: 0, envio_fisico: "0/0/0/", cuota: 0},
    { numero_pago: 4, fecha: "0/0/0/", saldo: 0, interes: 0, seguro_desg: 0, seguro_bien: 0, amortizacion: 0, envio_fisico: "0/0/0/", cuota: 0},
    { numero_pago: 5, fecha: "0/0/0/", saldo: 0, interes: 0, seguro_desg: 0, seguro_bien: 0, amortizacion: 0, envio_fisico: "0/0/0/", cuota: 0},
  ];

  displayedColumns: string[] = ['numeroPago', 'fecha', 'saldo', 'interes', 'seguroDesg', 'seguroBien', 'amortizacion', 'estado', 'cuota'];

  dataSource = new MatTableDataSource(this.datos);

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}






