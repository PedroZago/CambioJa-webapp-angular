import { Routes } from '@angular/router';

import { PerfilComponent } from './components';
import { AuthGuardService } from '../../guards';

export const PerfilRoutes: Routes = [
    {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [AuthGuardService]
    }
];