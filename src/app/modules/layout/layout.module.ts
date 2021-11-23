import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FooterComponent, NavbarComponent, PaginaComponent, ContentComponent,
  CarouselComponent, SobreNosComponent, ContatoComponent, NossoTimeComponent,
  PerfilComponent, EditarSenhaComponent
} from './components';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    PaginaComponent,
    ContentComponent,
    CarouselComponent,
    SobreNosComponent,
    ContatoComponent,
    NossoTimeComponent,
    PerfilComponent,
    EditarSenhaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
