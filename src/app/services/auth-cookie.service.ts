import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from '../modules';

@Injectable({
  providedIn: 'root'
})
export class AuthCookieService {

  loginResponse!: LoginResponse;

  token: any = null;
  usuarioID: any = null;

  constructor(
    private cookieService: CookieService
  ) { }

  salvarCookie(cookie: LoginResponse) {
    this.cookieService.set('X-Auth-Token', btoa(cookie.token));
    this.cookieService.set('ID', btoa(cookie.usuarioID))
  }

  lerCookie(): LoginResponse {
    this.token = this.cookieService.get('X-Auth-Token');
    this.usuarioID = this.cookieService.get('ID');

    return this.loginResponse = { usuarioID: atob(this.usuarioID), token: atob(this.token) };
  }

  deletarCookie() {
    this.cookieService.deleteAll();
  }

  usuarioEstaLogado(): boolean {
    return "" !== this.cookieService.get('X-Auth-Token') || "" !== this.cookieService.get('ID');
  }

}
