import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Perfil } from '../models';
import { AuthCookieService } from '../../../services';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private http: HttpClient,
    private authCookieService: AuthCookieService,
  ) { }

  private readonly BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authCookieService.extrairToken()}`
    })
  };

  dadosUsuario(usuarioID: number): Observable<any> {
    let params = `/api/users/${usuarioID}`;

    return this.http.get<any>(this.BASE_URL + params)
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }

  atualizarUsuario(perfil: Perfil, usuarioID: number) {
    let params = `/api/users/${usuarioID}`;

    return this.http.put<any>(this.BASE_URL + params, JSON.stringify(perfil))
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }

}
