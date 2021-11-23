import { Routes } from '@angular/router';

import { ContatoComponent, PaginaComponent, PerfilComponent, SobreNosComponent, SairComponent } from './components';
import { AuthGuardService } from '../../guards';

export const LayoutRoutes: Routes = [
    {
        path: 'home',
        component: PaginaComponent
    },
    {
        path: 'sobre',
        component: SobreNosComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    },
    {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'signout',
        component: SairComponent
    }
];