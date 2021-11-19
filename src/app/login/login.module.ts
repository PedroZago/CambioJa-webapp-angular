import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login.component';
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
  ],
  exports: [],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
