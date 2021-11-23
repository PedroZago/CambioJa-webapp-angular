import { Routes } from '@angular/router';

import { HistoricoComponent, PaginaComponent, ConversaoComponent, SaldoComponent } from './components';

export const CambioRoutes: Routes = [
    {
        path: 'cambio',
        component: PaginaComponent,
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