import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CadastroComponent } from './components';
import { CadastroService } from './services';
import { LayoutModule } from '../layout';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
  ],
  exports: [],
  providers: [
    CadastroService
  ]
})
export class CadastroModule { }
