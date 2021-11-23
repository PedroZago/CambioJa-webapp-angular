import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../services';
import { AuthCookieService } from '../../../services';
import { LoginResponse, Login } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: Login;
  loginResponse!: LoginResponse;
  possuiErro!: boolean;

  loginForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    senha: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  constructor(
    private loginService: LoginService,
    private authCookieService: AuthCookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get email(): any {
    return this.loginForm.get('email');
  }

  get senha(): any {
    return this.loginForm.get('senha');
  }

  set email(email: string) {
    this.loginForm.setValue({ email });
  }

  set senha(senha: string) {
    this.loginForm.patchValue({ senha });
  }

  fazerLogin(): void {
    this.loginService.fazerLogin(this.loginForm.value)
      .subscribe(
        response => {
          this.loginResponse = response,
            this.authCookieService.salvarCookie(this.loginResponse),
            this.router.navigate(['/home'])
        },
        error => {
          this.possuiErro = true
        }
      );
  }

  invertePossuiErro() {
    this.possuiErro = !this.possuiErro;
  }

}
