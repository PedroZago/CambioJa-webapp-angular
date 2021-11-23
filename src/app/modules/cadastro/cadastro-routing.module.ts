import { Routes } from '@angular/router';

import { CadastroComponent } from './components';
import { AuthGuardService } from '../../guards';

export const CadastroRoutes: Routes = [
    {
        path: 'signup',
        component: CadastroComponent,
        canActivate: [AuthGuardService]
    }
];