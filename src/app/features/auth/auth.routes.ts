import { Routes } from "@angular/router";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home')
            .then(m => m.Home),
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register-user/register-user')
            .then(m => m.RegisterUser)
    }
]