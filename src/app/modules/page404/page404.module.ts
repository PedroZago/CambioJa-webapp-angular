import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page404Component } from './components';
import { LayoutModule } from '../layout';

@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    CommonModule,
    LayoutModule,
  ]
})
export class Page404Module { }
