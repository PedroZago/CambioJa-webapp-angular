import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components';
import { LoginService } from './services';
import { LayoutModule } from '../layout';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
