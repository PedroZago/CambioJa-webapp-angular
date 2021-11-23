import { Routes } from '@angular/router';

import { Page404Component } from './components';

export const Page404Routes: Routes = [
    {
        path: '**',
        pathMatch: 'full',
        component: Page404Component
    }
];