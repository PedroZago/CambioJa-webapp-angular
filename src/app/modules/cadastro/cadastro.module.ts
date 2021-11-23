import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CadastroComponent } from './components';
import { CadastroService } from './services';
import { LoginModule, LoginService } from '../login';
import { AuthCookieService } from '../../services';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
  ],
  exports: [],
  providers: [
    CadastroService,
    LoginService,
    AuthCookieService
  ]
})
export class CadastroModule { }
