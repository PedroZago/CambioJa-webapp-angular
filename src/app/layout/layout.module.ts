import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components';
import { NavbarComponent } from './components';
import { PaginaComponent } from './components';
import { ContentComponent } from './components';
import { CarouselComponent } from './components';
import { SobreNosComponent } from './components';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    PaginaComponent,
    ContentComponent,
    CarouselComponent,
    SobreNosComponent
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
