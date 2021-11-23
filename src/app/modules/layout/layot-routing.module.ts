import { Routes } from '@angular/router';

import { ContatoComponent, PaginaComponent, PerfilComponent, SobreNosComponent } from './components';
import { AuthGuardService } from './guards';

export const LayoutRoutes: Routes = [
    {
        path: 'home',
        component: PaginaComponent,
        canActivate: [AuthGuardService],
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
        component: PerfilComponent
    }
];