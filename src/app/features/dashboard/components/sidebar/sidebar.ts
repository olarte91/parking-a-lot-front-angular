import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { AuthService } from '@core/services/auth.service';
import { Drawer } from 'primeng/drawer';
import { signal } from '@angular/core';

@Component({
  selector: 'sidebar',
  imports: [
    RouterLink,
    Menu,
    Button,
    Drawer
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
