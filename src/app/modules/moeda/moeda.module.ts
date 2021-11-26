import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MoedaComponent, AdicionarMoedaComponent, AtualizarMoedaComponent, ListarMoedaComponent } from './components';
import { LayoutModule } from '../layout';
import { MoedaService } from './services';

@NgModule({
  declarations: [
    MoedaComponent,
    AdicionarMoedaComponent,
    AtualizarMoedaComponent,
    ListarMoedaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [
    MoedaService
  ]
})
export class MoedaModule { }
