import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from '../modules';

@Injectable({
  providedIn: 'root'
})
export class AuthCookieService {

  loginResponse!: LoginResponse;

  constructor(
    private cookieService: CookieService
  ) { }

  salvarCookie(cookie: LoginResponse) {
    this.cookieService.set('X-Auth-Token', btoa(cookie.token));
    this.cookieService.set('ID', btoa(cookie.usuarioID));
  }

  lerCookie(): LoginResponse {
    const token: string = this.cookieService.get('X-Auth-Token');
    const usuarioID: string = this.cookieService.get('ID');

    return this.loginResponse = { usuarioID: atob(usuarioID), token: atob(token) };
  }

  extrarID(): number {
    const usuarioID: string = atob(this.cookieService.get('ID'));
    return parseInt(usuarioID, 10);
  }

  extrairToken(): string {
    const token: string = atob(this.cookieService.get('X-Auth-Token'));
    return token
  }

  deletarCookie() {
    this.cookieService.deleteAll();
  }

  estaAutenticado(): boolean {
    return "" !== this.cookieService.get('X-Auth-Token');
  }

}
