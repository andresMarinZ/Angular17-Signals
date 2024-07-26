import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signals',
    loadChildren: () =>
      import('./signals/signals.module').then((m) => m.SignalsModule),
  },
  {
    path: '**',
    redirectTo: 'signals',
  },
];
