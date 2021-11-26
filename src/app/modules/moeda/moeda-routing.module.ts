import { Routes } from '@angular/router';

import { MoedaComponent, AdicionarMoedaComponent, AtualizarMoedaComponent, ListarMoedaComponent } from './components';
import { AuthGuardService } from '../../guards';

export const MoedaRoutes: Routes = [
    {
        path: 'moeda',
        component: MoedaComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'listar'
            },
            {
                path: 'nova',
                component: AdicionarMoedaComponent,
            },
            {
                path: 'editar/:moedaID',
                component: AtualizarMoedaComponent,
            },
            {
                path: 'listar',
                component: ListarMoedaComponent,
            },
        ]
    }
];