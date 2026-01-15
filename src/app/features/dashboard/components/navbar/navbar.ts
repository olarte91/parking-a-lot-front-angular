import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    Menu,
    Button,
  ],
  templateUrl: './navbar.html'
})
export class Navbar implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) {
  }

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Usuario',
        items: [
          {
            label: 'Cerrar sesión',
            icon: 'pi pi-sign-out',
            command: () => {
              this.logout();
            }
          }
        ]
      }
    ];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

}
