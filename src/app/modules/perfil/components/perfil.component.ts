import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Perfil } from '../models';
import { AuthCookieService } from '../../../services';
import { PerfilService } from './../services';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil!: Perfil;
  possuiErro!: boolean;

  perfilForm = new FormGroup({
    nome: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    sexo: new FormControl(null, [
      Validators.required
    ]),
  })

  constructor(
    private perfilService: PerfilService,
    private authCookieService: AuthCookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dadosUsuario();
  }

  get nome(): any {
    return this.perfilForm.get('nome');
  }

  get email(): any {
    return this.perfilForm.get('email');
  }

  get sexo(): any {
    return this.perfilForm.get('sexo');
  }

  atualizarUsuario() {
    this.perfilService
  }

  dadosUsuario() {
    const cookie: any = this.authCookieService.lerCookie();

    this.perfilService.dadosUsuario(cookie)
      .subscribe(
        response => {
            console.log(response)
        },
        error => {
          this.possuiErro = true
        }
      )

  }

}
