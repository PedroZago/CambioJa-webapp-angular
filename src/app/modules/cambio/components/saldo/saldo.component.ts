import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Moeda, Saldo } from '../..//models';
import { AuthCookieService } from '../../../../services';
import { MoedaService } from '../../services';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  possuiErro!: boolean;
  saldo!: Saldo;
  moedas: any = [];

  saldoForm = new FormGroup({
    moeda: new FormControl(null, [
      Validators.required
    ])
  })

  constructor(
    private router: Router,
    private moedaService: MoedaService,
    private authCookieService: AuthCookieService,
  ) { }

  ngOnInit(): void {
    this.pegarTodasMoedas();
  }

  get moeda(): any {
    return this.saldoForm.get('moeda');
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

    this.moedaService.pegarSaldo(this.saldo)
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          this.possuiErro = true
        }
      );
  }

}
