import { Component } from '@angular/core';
import {Card} from 'primeng/card';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Checkbox} from 'primeng/checkbox';
import {Button} from 'primeng/button';
import {Toast} from 'primeng/toast';
import {Password} from 'primeng/password';
import {IftaLabel} from 'primeng/iftalabel';
import {InputText} from 'primeng/inputtext';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-register-user',
  imports: [
    Card,
    ReactiveFormsModule,
    Checkbox,
    Button,
    Toast,
    Password,
    IftaLabel,
    InputText
  ],
  templateUrl: './register-user.html'
})
export default class RegisterUser {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.registerForm = formBuilder.group({
      username: ['', [Validators.required,
        Validators.minLength(6),
      Validators.maxLength(20)]],
      email: ['', [Validators.email,
      Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
    if(this.registerForm.valid){
      const formData = this.registerForm.value;

      this.authService.register(formData).subscribe({
         next: (user: User) => {
           console.log()
         }
      })
    }
  }

  protected readonly length = length;
}
