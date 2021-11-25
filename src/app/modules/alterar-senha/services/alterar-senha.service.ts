import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Senha } from '../models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlterarSenhaService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly BASE_URL = environment.BASE_URL;

  alterarSenha(senha: Senha, usuarioID: number): Observable<any> {
    let params = `/api/users/${usuarioID}/atualizar-senha`;

    return this.http.post<Senha>(this.BASE_URL + params, JSON.stringify(senha))
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }

}
