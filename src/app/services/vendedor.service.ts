import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IVendedor } from './../models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  api = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  private httpOptions: { headers; observe; } = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    observe: 'response'
  };

  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }

  // Retorna a lista de todos vendedores
  getVendedores(): Observable<IVendedor[]> {
    const url = `${this.api}vendedores`;
    return this.http.get<IVendedor[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // retorna um vendedor
  getVendedoresPorCodigo(cdvend): Observable<IVendedor> {
    const url = `${this.api}vendedores/${cdvend}`;
    return this.http.get<IVendedor>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Salvar vendedor no Back/Banco
  postVendedor(data: any): Observable<any> {
    const url = `${this.api}vendedores`;
    return this.http.post<any>(url, data , this.httpOptions);
  }

  // Alterar dados cliente
  putVendedor(data: any): Observable<any> {
    const url = `${this.api}vendedores/${data.cdvend}`;
    return this.http.put<any>(url, data , this.httpOptions);
  }

  // Excluir Cliente
  deleteVendedor(cdvend: string) {
    const url = `${this.api}vendedores/${cdvend}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }
}
