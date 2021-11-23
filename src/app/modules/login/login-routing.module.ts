import { Routes } from '@angular/router';

import { LoginComponent } from './components';
import { AuthGuardService } from '../../guards';

export const LoginRoutes: Routes = [
    {
        path: 'signin',
        component: LoginComponent,
        canActivate: [AuthGuardService]
    }
];