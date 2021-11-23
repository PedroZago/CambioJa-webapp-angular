import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthCookieService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  usuarioID: any = null;
  token: any = null;

  constructor(
    private router: Router,
    private authCookieService: AuthCookieService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (route.url[0].path === "perfil" || route.url[0].path === "cambio") {
      if (this.authCookieService.usuarioEstaLogado()) {
        return true;
      } else {
        this.router.navigate(['/signin']);
        return false;
      }
    } else if (route.url[0].path === "signin" || route.url[0].path === "signup") {
      if (!this.authCookieService.usuarioEstaLogado()) {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    }
    return false;
  }
}