import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly BASE_URL = environment.BASE_URL;

  dadosUsuario(cookie: any): Observable<any> {
    console.log(cookie.token);

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${cookie.token}`
      })
    };

    let params = `/api/users/${cookie.usuarioID}`;

    console.log(this.BASE_URL + params)

    return this.http.get<any>(this.BASE_URL + params, httpOptions)
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }


}
