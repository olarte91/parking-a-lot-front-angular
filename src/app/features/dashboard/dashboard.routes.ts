import { Routes } from "@angular/router";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard')
            .then(m => m.Dashboard),
        children: [
            {
                path: '',
                redirectTo: 'parking-status',
                pathMatch: 'full'
            },
            {
                path: 'parking-status',
                loadComponent: () => import('./pages/parking-status/parking-status')
                    .then(m => m.ParkingStatus)
            }
        ]
    }
]