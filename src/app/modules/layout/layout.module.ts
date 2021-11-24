import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FooterComponent, NavbarComponent, PaginaComponent,
  CarouselComponent, NossoTimeComponent,
  EditarSenhaComponent, SairComponent
} from './components';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    PaginaComponent,
    CarouselComponent,
    NossoTimeComponent,
    EditarSenhaComponent,
    SairComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NossoTimeComponent,
  ]
})
export class LayoutModule { }
