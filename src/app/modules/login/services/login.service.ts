import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  private readonly BASE_URL = environment.BASE_URL;

  fazerLogin(usuario: Login): Observable<any> {
    let params = `/api/login`;
    return this.http.post<Login>(this.BASE_URL + params, JSON.stringify(usuario))
      .pipe(
        catchError(
          (error) => {
            return throwError(
              () => error
            )
          }));
  }

}
