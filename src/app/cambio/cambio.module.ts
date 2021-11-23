import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { MoedaService, UsuarioService, CambioService } from './services';
import { PaginaComponent, SaldoComponent, ConversaoComponent, HistoricoComponent, NossosModulosComponent } from './components';
import { LayoutModule } from '../layout';

@NgModule({
  declarations: [
    PaginaComponent,
    SaldoComponent,
    ConversaoComponent,
    HistoricoComponent,
    NossosModulosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    RouterModule
  ],
  providers: [
    MoedaService,
    CambioService,
    UsuarioService
  ]
})
export class CambioModule { }
