import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Saldo, Cambio } from '../../cambio';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CambioService {

  constructor(
    private http: HttpClient,
  ) { }

  private readonly BASE_URL = environment.BASE_URL;

  pegarCambios(saldo: Saldo): Observable<any> {
    let params = `/api/list-exchanges`;
    return this.http.post<Saldo>(this.BASE_URL + params, JSON.stringify(saldo))
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }

  fazerCambio(cambio: Cambio): Observable<any> {
    let params = `/api/exchanges`;
    return this.http.post<Saldo>(this.BASE_URL + params, JSON.stringify(cambio))
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }
}
