import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FooterComponent, NavbarComponent, PaginaComponent, ContentComponent,
  CarouselComponent, SobreNosComponent, ContatoComponent, NossoTimeComponent,
  PerfilComponent, EditarSenhaComponent
} from './components';
import { SairComponent } from './components/sair/sair.component';

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
    EditarSenhaComponent,
    SairComponent
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
