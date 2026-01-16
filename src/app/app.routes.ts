import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
    //canActivate: [authGuard],}
  },
  {
    path: 'error',
    loadComponent: () => import('./features/error/pages/login-error/login-error').then(m => m.LoginError)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
