import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  usuarioID: any = null;
  token: any = null;

  constructor(
    private router: Router
  ) { }

  canActivate(): any {
    if (true) {
      this.router.navigate(['/home']);
      return true;
    } else {
      this.router.navigate(['/signin']);
    }
    return false;
  }
}
