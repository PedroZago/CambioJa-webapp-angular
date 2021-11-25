import { Routes } from '@angular/router';

import { AlterarSenhaComponent } from './components';
import { AuthGuardService } from '../../guards';

export const AlterarSenhaRoutes: Routes = [
    {
        path: 'alterar-senha',
        component: AlterarSenhaComponent,
        canActivate: [AuthGuardService]
    }
];