import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlterarSenhaService } from '../services';
import { AuthCookieService } from '../../../services';
import { Senha } from '../models';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  senha!: Senha;
  possuiErro: boolean = false;
  senhaIguais: boolean = false;

  senhaForm = new FormGroup({
    senhaAtual: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ]),
    senhaNova: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmarSenhaNova: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  constructor(
    private alterarSenhaService: AlterarSenhaService,
    private authCookieService: AuthCookieService,
  ) { }

  ngOnInit(): void {
  }

  get senhaAtual(): any {
    return this.senhaForm.get('senhaAtual');
  }

  get senhaNova(): any {
    return this.senhaForm.get('senhaNova');
  }

  get confirmarSenhaNova(): any {
    return this.senhaForm.get('confirmarSenhaNova');
  }

  alterarSenha(): void {
    this.senha = { senhaAtual: this.senhaAtual.value, senhaNova: this.senhaNova.value }

    if (this.senhaNova.value === this.confirmarSenhaNova.value) {
      this.alterarSenhaService.alterarSenha(this.senha, this.authCookieService.extrarID())
        .subscribe(
          error => {
            this.possuiErro = true
          }
        )
    } else {
      this.inverteSenhasIguais();
    }
  }

  inverteSenhasIguais() {
    this.senhaIguais = !this.senhaIguais;
  }

}
