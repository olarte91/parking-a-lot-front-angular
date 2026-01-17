import { Component, inject, signal } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { AuthService } from '@core/services/auth.service';
import { LoginResponse } from '@core/models/login-response';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'login-form',
  imports: [
    InputText,
    FormsModule,
    Button,
    Dialog,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private messageService = inject(MessageService);

  visible: boolean = false;
  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
    this.loginForm.reset();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe({
        next: (response: LoginResponse) => {
          this.authService.setToken(response.token);
          this.messageService.add({ severity: 'success', summary: 'Login Successfully', detail: `Bienvenido usuario ${username}`, life: 3000 })
          this.router.navigate(['/dashboard'])
        },
        error: (error: any) => {
          console.log('Error de login', error);
          this.messageService.add({ severity: 'error', summary: 'Login failed.', detail: `User ${username} not found`, life: 3000 });
          this.router.navigate(['/auth']);
        }
      })
    }
  }

}
