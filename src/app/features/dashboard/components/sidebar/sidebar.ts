import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { AuthService } from '@core/services/auth.service';
import { Drawer } from 'primeng/drawer';
import { signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'sidebar',
  imports: [
    Menu,
    Drawer,
    RouterModule,
    PrimeTemplate
  ],
  templateUrl: './sidebar.html'
})
export class Sidebar {

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public visible = signal<boolean>(true);

  items: MenuItem[] = [
    {
      label: 'Ingreso de Vehículos',
      routerLink: '/dashboard/welcome',
      icon: 'pi pi-car',
    },
    {
      label: 'Salida de Vehículos',
      routerLink: '/dashboard/welcome',
      icon: 'pi pi-car',
    },
    {
      label: 'Reportes',
      routerLink: '/dashboard/welcome',
      icon: 'pi pi-chart-bar'
    },
    {
      label: 'Cerrar sesión',
      icon: 'pi pi-sign-out',
      command: () => {
        this.logout();
      }
    }
  ];

  logout() {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

}
