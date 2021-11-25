import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Moeda, Saldo } from '../models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  constructor(
    private http: HttpClient,
  ) { }

  private readonly BASE_URL = environment.BASE_URL;

  pegarTodasMoedas(): Observable<any> {
    let params = `/api/currencys`;
    return this.http.get<Moeda>(this.BASE_URL + params)
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }

  pegarSaldo(saldo: Saldo) {
    console.log(JSON.stringify(saldo));
    let params = `/api/exchanges/balance`;
    return this.http.post(this.BASE_URL + params, JSON.stringify(saldo))
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }
}
