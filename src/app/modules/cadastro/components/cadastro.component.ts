import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CadastroService } from '../services';
import { CadastroResponse, Cadastro } from '../models';
import { LoginService } from '../../login';
import { AuthCookieService } from '../../../services';
import { LoginResponse, Login } from '../../login';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro!: Cadastro;
  cadastroResponse!: CadastroResponse;
  possuiErro!: boolean;

  login!: Login;
  loginResponse!: LoginResponse;

  cadastroForm = new FormGroup({
    nome: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    senha: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ]),
    sexo: new FormControl(null, [
      Validators.required
    ]),
  })

  constructor(
    private cadastroService: CadastroService,
    private loginService: LoginService,
    private authCookieService: AuthCookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get nome(): any {
    return this.cadastroForm.get('nome');
  }

  get email(): any {
    return this.cadastroForm.get('email');
  }

  get senha(): any {
    return this.cadastroForm.get('senha');
  }

  get sexo(): any {
    return this.cadastroForm.get('sexo');
  }

  fazerCadastro(): void {
    this.cadastroService.fazerCadastro(this.cadastroForm.value)
      .subscribe(
        response => {
          this.cadastroResponse = response,

            this.loginService.fazerLogin(this.cadastroForm.value)
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
