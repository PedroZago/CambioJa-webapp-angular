import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MoedaService, CambioService } from './services';
import { SaldoComponent, ConversaoComponent, HistoricoComponent } from './components';
import { LayoutModule } from '../layout';
import { CambioComponent } from './components/cambio/cambio.component';

@NgModule({
  declarations: [
    SaldoComponent,
    ConversaoComponent,
    HistoricoComponent,
    CambioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    RouterModule, ReactiveFormsModule
  ],
  providers: [
    MoedaService,
    CambioService
  ]
})
export class CambioModule { }
