import { Component } from '@angular/core';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {Avatar} from 'primeng/avatar';
import {Badge} from 'primeng/badge';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [
    Menubar,
    Avatar,
    Badge,
    NgClass
  ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export default class Welcome {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Usuario', icon: 'pi pi-user' },
      { label: 'Registro Vehículo', icon: 'pi pi-truck' }
    ];
  }


}
