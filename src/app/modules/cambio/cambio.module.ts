import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CambioService } from './services';
import { SaldoComponent, ConversaoComponent, HistoricoComponent, CambioComponent } from './components';
import { LayoutModule } from '../layout';
import { ValorMaximoDirective } from '../../directives';

@NgModule({
  declarations: [
    SaldoComponent,
    ConversaoComponent,
    HistoricoComponent,
    CambioComponent,
    ValorMaximoDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    CambioService
  ]
})
export class CambioModule { }
