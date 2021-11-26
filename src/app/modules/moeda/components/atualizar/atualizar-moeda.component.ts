import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MoedaService } from '../../../moeda';
import { Moeda, } from '../../../cambio';
import { valorMaximoValidator } from '../../../../directives';

@Component({
  selector: 'app-atualizar-moeda',
  templateUrl: './atualizar-moeda.component.html',
  styleUrls: ['./atualizar-moeda.component.css']
})
export class AtualizarMoedaComponent implements OnInit {

  possuiErro!: boolean;
  moeda!: Moeda;
  moedaID!: number;

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.moedaID = +this.route.snapshot.params['moedaID'];
    this.pegarMoedaPorID(this.moedaID);
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


  pegarMoedaPorID(moedaID: number): void {
    this.moedaService.pegarMoedaPorID(moedaID)
      .subscribe(
        response => {
          this.moedaForm.patchValue(response)
        },
        error => {
          this.possuiErro = true
        }
      );
  }

  editarMoeda(): void {
    this.moeda = { moedaID: this.moedaID, nome: this.nome.value, codISO: this.codISO.value, cotacao: this.cotacao.value }

    this.moedaService.editarMoeda(this.moeda)
      .subscribe(
        error => {
          this.possuiErro = true
        }
      );
  }

}
