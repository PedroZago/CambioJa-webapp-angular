import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  dadosUsuario(usuarioID: number): Observable<any> {
    let params = `/api/users/${usuarioID}`;

    return this.http.get(this.BASE_URL + params)
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }


}
