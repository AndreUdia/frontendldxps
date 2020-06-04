import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ICliente } from './../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  private httpOptions: { headers: any; observe: any; } = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    observe: 'response'
  };

  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }

  // Retorna a lista de todos clientes
  getClientes(): Observable<ICliente[]> {
    const url = `${this.api}clientes`;
    return this.http.get<ICliente[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Retorna todos clientes de um determinado vendedor
  getClientesDoVendedor(cdvend: string): Observable<ICliente[]> {
    const url = `${this.api}vendedor/${cdvend}/clientes`;
    return this.http.get<ICliente[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Salvar cliente no Back/Banco
  postCliente(data: any): Observable<any> {
    const url = `${this.api}clientes`;
    return this.http.post<any>(url, data , this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Alterar dados cliente
  putCliente(data: any, cdcl: string): Observable<any> {
    const url = `${this.api}clientes/${cdcl}`;
    return this.http.put<any>(url, data , this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Excluir Cliente
  deleteCliente(cdcl: string) {
    const url = `${this.api}clientes/${cdcl}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
