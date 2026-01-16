import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'dashboard',
  imports: [
    RouterOutlet,
    Sidebar
  ],
  templateUrl: './dashboard.html'
})
export class Dashboard {


}
