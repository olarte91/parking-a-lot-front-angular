import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/pages/home/home').then(m => m.Home),
  },

  {
    path: 'auth/register',
    loadComponent: () => import('./features/auth/pages/register-user/register-user').then(m => m.RegisterUser)
  },

  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard],
    children: [
      {
        path: 'welcome',
        loadComponent: () => import('./features/welcome/pages/welcome/welcome').then(m => m.Welcome)
      },
    ]
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
