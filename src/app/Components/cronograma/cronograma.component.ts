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

  displayedColumns: string[] = ['numeroPago', 'fecha', 'saldo', 'interes', 'seguroDesg', 'seguroBien', 'amortizacion', 'estado', 'cuota'];
  currencySymbol = 'S/';
  determinarSimboloMoneda(): void {
    if (localStorage.getItem('moneda') === 'dolares') {
      this.currencySymbol = '$';
    } else {
      this.currencySymbol = 'S/';
    }
  }
  ngOnInit(): void {

    this.determinarSimboloMoneda();
  }

}






