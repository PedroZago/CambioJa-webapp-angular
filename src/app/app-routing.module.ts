import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CadastroRoutes, CambioRoutes, SairRoutes, LoginRoutes,
  Page404Routes, PerfilRoutes, ContatoRoutes, SobreNosRoutes,
  HomeRoutes, AlterarSenhaRoutes
} from './modules';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  ...LoginRoutes,
  ...AlterarSenhaRoutes,
  ...CadastroRoutes,
  ...ContatoRoutes,
  ...SobreNosRoutes,
  ...HomeRoutes,
  ...CambioRoutes,
  ...PerfilRoutes,
  ...SairRoutes,
  ...Page404Routes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }