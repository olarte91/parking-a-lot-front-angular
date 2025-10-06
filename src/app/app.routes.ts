import { Routes } from '@angular/router';
import {authGuard} from './auth/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/pages/home/home'),
  },

  {
    path: 'auth/register',
    loadComponent: () => import('./auth/pages/register-user/register-user')
  },

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/pages/dashboard/dashboard'),
    canActivate: [authGuard],
    children: [
      {
        path: 'welcome',
        loadComponent: () => import('./welcome/pages/welcome/welcome')
      },
    ]
  },

  {
    path: 'error',
    loadComponent: () => import('./error/pages/login-error/login-error')
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
