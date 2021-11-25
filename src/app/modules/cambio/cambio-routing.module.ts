import { Routes } from '@angular/router';

import { HistoricoComponent, ConversaoComponent, SaldoComponent, CambioComponent } from './components';
import { AuthGuardService } from '../../guards';

export const CambioRoutes: Routes = [
    {
        path: 'cambio',
        component: CambioComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'saldo'
            },
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