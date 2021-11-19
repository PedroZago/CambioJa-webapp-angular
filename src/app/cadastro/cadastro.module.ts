import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CadastroComponent } from './components';
import { CadastroService } from './services';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CadastroComponent
  ],
  providers: [
    CadastroService
  ]
})
export class CadastroModule { }
