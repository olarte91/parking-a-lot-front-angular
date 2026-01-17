import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-welcome',
  imports: [
  ],
  templateUrl: './welcome.html'
})
export class Welcome implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Usuario', icon: 'pi pi-user' },
      { label: 'Registro Vehículo', icon: 'pi pi-truck' }
    ];
  }


}
