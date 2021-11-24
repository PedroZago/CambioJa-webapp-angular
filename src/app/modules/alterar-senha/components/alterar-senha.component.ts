import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  senhaForm = new FormGroup({
    senhaAtual: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ]),
    senhaNova: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  constructor() { }

  ngOnInit(): void {
  }

  get senhaAtual(): any {
    return this.senhaForm.get('senhaAtual');
  }

  get senhaNova(): any {
    return this.senhaForm.get('senhaNova');
  }

  alterarSenha(): void { }

}
