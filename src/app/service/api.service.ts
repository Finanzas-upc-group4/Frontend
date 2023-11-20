import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8084/api/v1';

  constructor(private http: HttpClient) {}

  //Registro
  postDatosRegister(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, datos);
  }
  getDatosRegister(idUser: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/register/historial/${idUser}`);
  }
  getDatosRegisterId(idUser: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/register/${idUser}`);
  }
  //Registro General Data
  getGeneralData(idUser: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/generalData/${idUser}`);
  }
  postGeneralData(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/generalData`, datos);
  }

  //Users
  getUser(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/email/${email}`).pipe(
        catchError(error => {
          return throwError('No existe un usuario con ese correo electrónico.');
        })
    );
  }
  postUser(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user`, datos);
  }

}
