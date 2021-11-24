import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cadastro } from '../models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
    private http: HttpClient,
  ) { }

  private readonly BASE_URL = environment.BASE_URL;

  fazerCadastro(usuario: Cadastro): Observable<any> {
    let params = `/api/users`;
    return this.http.post<Cadastro>(this.BASE_URL + params, JSON.stringify(usuario))
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }
}
