import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MoedaService } from '../../../moeda';
import { Moeda, } from '../../../cambio';

@Component({
  selector: 'app-adicionar-moeda',
  templateUrl: './adicionar-moeda.component.html',
  styleUrls: ['./adicionar-moeda.component.css']
})
export class AdicionarMoedaComponent implements OnInit {

  possuiErro!: boolean;
  moeda!: Moeda;

  moedaForm = new FormGroup({
    nome: new FormControl(null, [
      Validators.required
    ]),
    codISO: new FormControl(null, [
      Validators.required
    ]),
    cotacao: new FormControl(null, [
      Validators.required
    ])
  })

  constructor(
    private moedaService: MoedaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get nome(): any {
    return this.moedaForm.get('nome');
  }

  get codISO(): any {
    return this.moedaForm.get('codISO');
  }

  get cotacao(): any {
    return this.moedaForm.get('cotacao');
  }

  adicionarMoeda(): void {
    this.moeda = { nome: this.nome.value, codISO: this.codISO.value, cotacao: this.cotacao.value }
    this.moedaService.adicionarMoeda(this.moeda)
      .subscribe(
        response => {
          this.router.navigate(['/moeda'])
        },
        error => {
          this.possuiErro = true
        }
      );
  }

}
