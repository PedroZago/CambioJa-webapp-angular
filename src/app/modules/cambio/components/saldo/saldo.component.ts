import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  possuiErro!: boolean;

  saldoForm = new FormGroup({
    moeda: new FormControl(null, [
      Validators.required
    ])
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get moeda(): any {
    return this.saldoForm.get('moeda');
  }

  exibirSaldo(): void {

  }

}
