import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MoedaService } from './services';
import { UsuarioService } from './services';
import { CambioService } from './services';
import { PaginaComponent } from './components';
import { LayoutModule } from '../layout';
import { ContentComponent } from './components/content/content.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { ConversaoComponent } from './components/conversao/conversao.component';
import { HistoricoComponent } from './components/historico/historico.component';

@NgModule({
  declarations: [
    PaginaComponent,
    ContentComponent,
    SaldoComponent,
    ConversaoComponent,
    HistoricoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
  ],
  providers: [
    MoedaService,
    CambioService,
    UsuarioService
  ]
})
export class CambioModule { }
