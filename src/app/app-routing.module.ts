import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CadastroRoutes, CambioRoutes, LayoutRoutes, LoginRoutes,
  Page404Routes, PerfilRoutes, ContatoRoutes, SobreNosRoutes
} from './modules';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  ...LoginRoutes,
  ...CadastroRoutes,
  ...LayoutRoutes,
  ...CambioRoutes,
  ...PerfilRoutes,
  ...ContatoRoutes,
  ...SobreNosRoutes,
  ...Page404Routes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }