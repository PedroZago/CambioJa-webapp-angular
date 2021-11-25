import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlterarSenhaComponent } from './components';
import { LayoutModule } from '../layout';
import { AlterarSenhaService } from './services';

@NgModule({
  declarations: [
    AlterarSenhaComponent
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
    AlterarSenhaService
  ]
})
export class AlterarSenhaModule { }
