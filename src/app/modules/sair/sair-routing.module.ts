import { Routes } from '@angular/router';

import { SairComponent } from './components';
import { AuthGuardService } from '../../guards';

export const SairRoutes: Routes = [
    {
        path: 'signout',
        component: SairComponent,
        canActivate: [AuthGuardService]
    }
];