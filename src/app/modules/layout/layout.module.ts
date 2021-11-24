import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FooterComponent, NavbarComponent, CarouselComponent, NossoTimeComponent
} from './components';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    NossoTimeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    NossoTimeComponent
  ]
})
export class LayoutModule { }
