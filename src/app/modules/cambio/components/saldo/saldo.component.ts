import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Saldo } from '../../models';
import { AuthCookieService } from '../../../../services';
import { MoedaService } from '../../../moeda';
import { CambioService } from '../../services';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  possuiErro!: boolean;
  saldo!: Saldo;
  moedas: any = [];
  codISO!: string;
  saldoTotal: number = 0;
  nome: any;

  saldoForm = new FormGroup({
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
    return this.saldoForm.get('moeda');
  }

  moedaSelecionada(event: any) {
    for (var i in this.moedas) {
      if (event.target.value == this.moedas[i].moedaID) {
        this.codISO = this.moedas[i].codISO;
        this.pegarSaldo();
        this.saldoTotal = 0;
      }
    }
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

  pegarSaldo(): void {
    this.saldo = { moedaID: parseInt(this.moeda.value, 10), usuarioID: this.authCookieService.extrarID() }

    this.cambioService.pegarCambios(this.saldo)
      .subscribe(
        (response: any) => {
          if (response != null) {
            for (var i in response) {
              this.saldoTotal += response[i].valorFinal;
            }
          }
        },
        error => {
          this.possuiErro = true
        }
      );
  }

}
