import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Menu} from 'primeng/menu';
import {Button} from 'primeng/button';
import {MenuItem} from 'primeng/api';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    Menu,
    Button,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

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

  logout(){
    this.authService.logout();
    this.router.navigate(['auth']);
  }

}
