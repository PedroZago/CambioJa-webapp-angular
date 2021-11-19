import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroRoutes } from './cadastro';
import { CambioRoutes } from './cambio';
import { LoginRoutes } from './login';
import { Page404Routes } from './page404';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  ...LoginRoutes,
  ...CadastroRoutes,
  ...CambioRoutes,
  ...Page404Routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }