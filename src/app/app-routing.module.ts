import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroRoutes } from './modules';
import { CambioRoutes } from './modules';
import { LayoutRoutes } from './modules';
import { LoginRoutes } from './modules';
import { Page404Routes } from './modules';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  ...LoginRoutes,
  ...CadastroRoutes,
  ...CambioRoutes,
  ...LayoutRoutes,
  ...Page404Routes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }