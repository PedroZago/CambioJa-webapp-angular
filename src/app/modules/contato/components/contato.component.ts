import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContatoService } from '../services';
import { Contato } from '../models';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato!: Contato;
  possuiErro!: boolean;

  contatoForm = new FormGroup({
    nome: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required
    ]),
    mensagem: new FormControl(null, [
      Validators.required
    ]),
  })

  constructor(
    private contatoService: ContatoService
  ) { }

  get nome(): any {
    return this.contatoForm.get('nome');
  }

  get email(): any {
    return this.contatoForm.get('email');
  }

  get mensagem(): any {
    return this.contatoForm.get('mensagem');
  }

  ngOnInit(): void {
  }

  enviarMensagem(): void {
    this.contatoService.enviarMensagem(this.contatoForm.value)
  }

}
