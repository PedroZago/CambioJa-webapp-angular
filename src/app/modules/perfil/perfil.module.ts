import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PerfilComponent } from './components';
import { LayoutModule } from '../layout';
import { PerfilService } from './services';

@NgModule({
  declarations: [
    PerfilComponent
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
    PerfilService
  ]
})
export class PerfilModule { }
