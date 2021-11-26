import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Saldo, Cambio } from '../../models';
import { AuthCookieService } from '../../../../services';
import { MoedaService } from '../../../moeda';
import { CambioService } from '../../services';
import { valorMaximoValidator } from '../../../../directives';

@Component({
  selector: 'app-conversao',
  templateUrl: './conversao.component.html',
  styleUrls: ['./conversao.component.css']
})
export class ConversaoComponent implements OnInit {

  possuiErro!: boolean;
  saldo!: Saldo;
  moedas: any = [];
  cambio!: Cambio;

  conversaoForm = new FormGroup({
    moeda: new FormControl(null, [
      Validators.required
    ]),
    valor: new FormControl(null, [
      Validators.required,
      valorMaximoValidator()
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
    return this.conversaoForm.get('moeda');
  }

  get valor(): any {
    return this.conversaoForm.get('valor');
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

  fazerCambio(): void {
    this.cambio = { moedaID: parseInt(this.moeda.value, 10), usuarioID: this.authCookieService.extrarID(), valorOrigem: parseInt(this.valor.value, 10) }

    this.cambioService.fazerCambio(this.cambio)
      .subscribe(
        error => {
          this.possuiErro = true
        }
      );
  }

}
