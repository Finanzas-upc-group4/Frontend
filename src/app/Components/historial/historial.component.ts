import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  historialList: any[] = [];

  cronograma: any={}
  formData: any = {
    vehicleValue: 0,
    initialPayment: 0,
    loanAmount: 0,
    annualInterestRate: 0,
    paymentsPerYear: 12,
    paymentPeriod: 0,
    individualLifeInsuranceRate: 0,
    vehicleInsuranceRate: 0,
    physicalStatementDelivery: 0,
  };
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    // Supongamos que obtienes el id del usuario de algún lugar (por ejemplo, localStorage)
    const userId = localStorage.getItem('UserId');

    if (userId) {
      this.apiService.getDatosRegister(+userId).subscribe(
          (historial) => {
            this.historialList = historial;
          },
          (error) => {
            console.error(error);
          }
      );
    }
  }
  verDetalles(cronogramaId: number) {
    console.log(cronogramaId);
    this.apiService.getGeneralData(cronogramaId).subscribe(
        (cronograma) => {
          this.cronograma = cronograma;
          console.log(this.cronograma);

          this.formData = {
            vehicleValue: this.cronograma.valorDelVehiculo,
            initialPayment: this.cronograma.cuotaInicial,
            loanAmount: this.cronograma.montoPrestamo,
            annualInterestRate: this.cronograma.tea,
            paymentsPerYear: 12,
            paymentPeriod: this.cronograma.periodoDePago,
            individualLifeInsuranceRate: this.cronograma.tsd,
            vehicleInsuranceRate: this.cronograma.tsva,
            physicalStatementDelivery: this.cronograma.envioFisicoEstadoDeCuenta,
          };

          console.log(this.formData);
          this.formData.loanAmount = this.formData.vehicleValue - this.formData.initialPayment;

          this.formData.annualInterestRate = this.formData.annualInterestRate / 100;
          this.formData.individualLifeInsuranceRate = this.formData.individualLifeInsuranceRate / 100;
          this.formData.vehicleInsuranceRate = this.formData.vehicleInsuranceRate / 100;
            console.log(cronogramaId);
          //Obtener dias del mes
            const posicion = this.historialList.findIndex(item => item.id === cronogramaId);
            const dateObject = new Date(this.historialList[posicion].fechaDesembolso);
          let lastDayOfMonth = new Date(dateObject.getFullYear(), dateObject.getMonth() + 1, 0).getDate();
          console.log("Dias del mes: " + lastDayOfMonth);

          // Crear un array para almacenar los resultados de cada iteración
          const resultados = [];

          // Número de iteraciones (ajusta según tus necesidades)
          const numIteraciones = Number(this.formData.paymentPeriod)+1;
          console.log("Numero de iteraciones: " + numIteraciones);
          for (let i = 0; i < numIteraciones; i++) {

            //FORMULAS
            //TNA
            const TNA = ((Math.pow(1 + this.formData.annualInterestRate,1/12) -1)*((12*365)/360));
            //console.log("TNA: " + TNA);

            //Tasa Ajustada al Tazo
            const TAT = (TNA * lastDayOfMonth)/365
            //console.log("TAT: " + TAT);
            //Interes Mensual
            const IM = (TAT * this.formData.loanAmount);
            //console.log("Interes Mensual: " + IM);
            //Tasa de Seguro desgravamen Anual
            const TSDA = (this.formData.individualLifeInsuranceRate * 12);
            //console.log("Tasa de Seguro desgravamen Anual: " + TSDA);
            //Tasa de Seguro desgravamen Ajustada al Plazo
            const TSDAP = (TSDA * lastDayOfMonth)/365;
            //console.log("Tasa de Seguro desgravamen Ajustada al Plazo: " + TSDAP);
            //Seguro desgravamen Mensual
            const SDM = (TSDAP * this.formData.loanAmount);
            //console.log("Seguro desgravamen Mensual: " + SDM);
            //Tasa de Seguro de Vehiculo Anual
            const TSV = (this.formData.vehicleInsuranceRate * lastDayOfMonth)/365;
            //console.log("Tasa de Seguro de Vehiculo Anual: " + TSV);

            //Seguro de Vehiculo Mensual - Aquí me quedé
            const SVM = (TSV * this.formData.vehicleValue);
            //console.log("Seguro de Vehiculo Mensual: " + SVM);
            //Financiamiento Cuotaas
            let FC;
            if (this.formData.paymentPeriod == 36){
              FC = this.formData.vehicleValue * 0.4;
            }else{
              FC = this.formData.vehicleValue * 0.5;
            }
            //console.log("Financiamiento Cuotas: " + FC);
            //Cuota sobre financiamiento
            const it = TAT*FC;
            //console.log("Cuota sobre financiamiento: " + it);
            //Calculo de la cuota
            const ci = FC*(TAT/(1-(Math.pow(1+TAT,-this.formData.paymentPeriod))));
            //console.log("Calculo de la cuota: " + ci);
            //Cuota de amortizacion
            let CA = ci - it;
            //console.log("Cuota de amortizacion: " + CA);
            if (i === numIteraciones - 1) {
              CA = this.formData.loanAmount;
              this.formData.loanAmount = 0;
            }
            //Cuota total n
            let CTn = IM+SDM+SVM+CA+this.formData.physicalStatementDelivery;
            //console.log("Cuota total n: " + CTn);


            //CREAR UN JSON
            const uniqueFileName = 'datosParaTabla' + Date.now() + '.json';

            const resultadoIteracion = {
              fecha: dateObject.toISOString().slice(0, 10),
              saldo: this.formData.loanAmount,
              interes: IM,
              seguroDesgravamen: SDM,
              seguroBien: SVM,
              amortizacion: CA,
              envioFisico: this.formData.physicalStatementDelivery,
              cuotaTotal: CTn,
            }
            resultados.push(resultadoIteracion);

            this.formData.loanAmount = this.formData.loanAmount - CA;
            // Ajustar fecha para la siguiente iteración
            dateObject.setMonth(dateObject.getMonth() + 1);

            lastDayOfMonth = new Date(dateObject.getFullYear(), dateObject.getMonth() + 1, 0).getDate();
          }

          console.log(resultados);
          localStorage.setItem('resultadosIteraciones', JSON.stringify(resultados));
          localStorage.setItem('VehicleValue', JSON.stringify(this.formData.vehicleValue));
          localStorage.setItem('InitialPayment', JSON.stringify(this.formData.initialPayment));
          localStorage.setItem('porcentaje', JSON.stringify((this.formData.initialPayment / this.formData.vehicleValue)*100));
          console.log("Esto es desde el local storage: " + localStorage.getItem('porcentaje'));
          console.log("Esto es desde el local storage: " + localStorage.getItem('resultadosIteraciones'));
          localStorage.removeItem('solicitud');
          this.router.navigate(['/cronograma']);

        },
        (error) => {
          console.error(error);
        }
    );


  }
  RegresarInicio() {
    this.router.navigate(['/home']);
  }
}
