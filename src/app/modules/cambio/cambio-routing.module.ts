import { Routes } from '@angular/router';

import { HistoricoComponent, PaginaComponent, ConversaoComponent, SaldoComponent } from './components';
import { AuthGuardService } from '../../guards';

export const CambioRoutes: Routes = [
    {
        path: 'cambio',
        component: PaginaComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'saldo',
                component: SaldoComponent,
            },
            {
                path: 'historico',
                component: HistoricoComponent,
            },
            {
                path: 'conversao',
                component: ConversaoComponent,
            },
        ]
    }
];