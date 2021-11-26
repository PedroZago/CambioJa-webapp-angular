import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Saldo, } from '../../models';
import { AuthCookieService } from '../../../../services';
import { MoedaService } from '../../../moeda';
import { CambioService } from '../../services';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  possuiErro!: boolean;
  saldo!: Saldo;
  moedas: any = [];
  cambios: any = [];
  codISO!: string;

  historicoForm = new FormGroup({
    moeda: new FormControl(null, [
      Validators.required
    ])
  })

  constructor(
    private moedaService: MoedaService,
    private cambioService: CambioService,
    private authCookieService: AuthCookieService,
  ) { }

  ngOnInit(): void {
    this.pegarTodasMoedas();
  }

  get moeda(): any {
    return this.historicoForm.get('moeda');
  }

  pegarTodasMoedas() {
    this.moedaService.pegarTodasMoedas()
      .subscribe(
        response => {
          response.forEach((moeda: any) => this.moedas.push(moeda));
        },
        error => {
          this.possuiErro = true
        }
      );
  }

  moedaSelecionada(event: any) {
    for (var i in this.moedas) {
      if (event.target.value == this.moedas[i].moedaID) {
        this.codISO = this.moedas[i].codISO;
        this.pegarHistorico();
      }
    }
  }

  pegarHistorico() {
    this.saldo = { moedaID: parseInt(this.moeda.value, 10), usuarioID: this.authCookieService.extrarID() }

    this.cambioService.pegarCambios(this.saldo)
      .subscribe(
        (response: any) => {
          this.cambios = []
          if (response != null) {
            this.cambios = response;
          }
        },
        error => {
          this.possuiErro = true
        }
      );
  }

}
