import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CookieTokenService {

  loginResponse!: LoginResponse;

  constructor(
    private cookieService: CookieService
  ) { }

  salvarCookie(cookie: LoginResponse) {
    this.cookieService.set('X-Auth-Token', btoa(cookie.token));
    this.cookieService.set('ID', btoa(cookie.usuarioID))
  }

  lerCookie(): LoginResponse {
    const token: string = this.cookieService.get('X-Auth-Token');
    const usuarioID: string = this.cookieService.get('ID');

    return this.loginResponse = { usuarioID: atob(usuarioID), token: atob(token) };
    //this.loginResponse = this.cookieTokenService.pegarCookie();
  }

  deletarCookie() {
    this.cookieService.deleteAll();
  }

}
