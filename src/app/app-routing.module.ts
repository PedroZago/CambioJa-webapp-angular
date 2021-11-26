import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  CadastroRoutes, CambioRoutes, SairRoutes, LoginRoutes,
  Page404Routes, PerfilRoutes, ContatoRoutes, SobreNosRoutes,
  HomeRoutes, AlterarSenhaRoutes, MoedaRoutes
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
  ...MoedaRoutes,
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