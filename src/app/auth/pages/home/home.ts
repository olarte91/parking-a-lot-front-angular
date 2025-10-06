import { Component } from '@angular/core';
import LoginFormComponent from "../../components/login-form.component/login-form.component";
import {Button} from 'primeng/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    LoginFormComponent,
    Button
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export default class Home {


  constructor(private router: Router) {}

  register(){
    this.router.navigate(['auth/register']);
  }
}
