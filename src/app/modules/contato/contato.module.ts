import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContatoComponent } from './components';
import { LayoutModule } from '../layout';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class ContatoModule { }
