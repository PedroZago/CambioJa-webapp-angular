import { Routes } from '@angular/router';

import { PaginaComponent, SairComponent } from './components';
import { AuthGuardService } from '../../guards';

export const LayoutRoutes: Routes = [
    {
        path: 'home',
        component: PaginaComponent
    },
    {
        path: 'signout',
        component: SairComponent
    }
];