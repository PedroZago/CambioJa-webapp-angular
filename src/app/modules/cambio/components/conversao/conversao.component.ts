import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversao',
  templateUrl: './conversao.component.html',
  styleUrls: ['./conversao.component.css']
})
export class ConversaoComponent implements OnInit {

  possuiErro!: boolean;

  conversaoForm = new FormGroup({
    moeda: new FormControl(null, [
      Validators.required
    ]),
    nome: new FormControl(null, [
      Validators.required
    ])
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get moeda(): any {
    return this.conversaoForm.get('moeda');
  }

  get nome(): any {
    return this.conversaoForm.get('nome');
  }

  converterMoeda(): void {

  }

}
