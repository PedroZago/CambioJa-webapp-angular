import { Component, OnInit } from '@angular/core';

import { MoedaService } from '../../../moeda';

@Component({
  selector: 'app-listar-moeda',
  templateUrl: './listar-moeda.component.html',
  styleUrls: ['./listar-moeda.component.css']
})
export class ListarMoedaComponent implements OnInit {

  possuiErro!: boolean;
  moedas: any = [];

  constructor(
    private moedaService: MoedaService,
  ) { }

  ngOnInit(): void {
    this.pegarTodasMoedas();
  }

  pegarTodasMoedas() {
    this.moedaService.pegarTodasMoedas()
      .subscribe(
        response => {
          this.moedas = [];
          response.forEach((moeda: any) => this.moedas.push(moeda));
        },
        error => {
          this.possuiErro = true
        }
      );
  }

  removerMoeda($event: any, moeda: any) {
    $event.preventDefault();
    if (confirm(`Deseja remover a moeda ${moeda.nome}?`)) {
      this.moedaService.removerMoeda(moeda)
        .subscribe(
          error => {
            this.possuiErro = true
          }
        );
      this.pegarTodasMoedas();
    }
  }

}
