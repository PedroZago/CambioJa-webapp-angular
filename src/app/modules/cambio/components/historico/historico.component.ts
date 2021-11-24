import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  possuiErro!: boolean;

  historicoForm = new FormGroup({
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
    return this.historicoForm.get('moeda');
  }

  pegarHistorico(): void {

  }

}
