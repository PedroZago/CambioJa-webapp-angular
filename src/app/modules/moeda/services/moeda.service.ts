import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Moeda } from '../../cambio';
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

  pegarMoedaPorID(moedaID: number): Observable<any> {
    let params = `/api/currencys/${moedaID}`;
    return this.http.get(this.BASE_URL + params)
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }

  editarMoeda(moeda: Moeda): Observable<any> {
    let params = `/api/currencys/${moeda.moedaID}`;
    return this.http.put(this.BASE_URL + params, JSON.stringify(moeda))
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }

  removerMoeda(moeda: Moeda): Observable<any> {
    let params = `/api/currencys/${moeda.moedaID}`;
    return this.http.delete(this.BASE_URL + params)
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }

  adicionarMoeda(moeda: Moeda): Observable<any> {
    let params = `/api/currencys`;
    return this.http.post(this.BASE_URL + params, JSON.stringify(moeda))
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }


}
