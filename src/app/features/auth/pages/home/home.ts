import { Component } from '@angular/core';
import { LoginFormComponent } from "@features/auth/components/login-form/login-form.component";
import { Button } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    LoginFormComponent,
    Button
  ],
  templateUrl: './home.html'
})
export class Home {


  constructor(private router: Router) { }

  register() {
    this.router.navigate(['auth/register']);
  }
}
