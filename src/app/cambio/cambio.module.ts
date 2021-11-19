import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MoedaService } from './services';
import { UsuarioService } from './services';
import { CambioService } from './services';
import { FooterComponent } from './footer';
import { NavbarComponent } from './navbar';
import { PaginaComponent } from './pagina/pagina.component';
import { ContentComponent } from './content/content.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    PaginaComponent,
    ContentComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MoedaService,
    CambioService,
    UsuarioService
  ]
})
export class CambioModule { }
