import {Component, signal} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'login-form',
  imports: [
    InputText,
    FormsModule,
    Button,
    Dialog,
    ReactiveFormsModule,
  ],
  providers: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export default class LoginFormComponent {

  visible: boolean = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  showDialog(){
    this.visible = true;
  }

  closeDialog(){
    this.visible = false;
    this.loginForm.reset();
  }

  onSubmit(){
    if(this.loginForm.valid){
      const {username, password} = this.loginForm.value;

      this.authService.login(username, password).subscribe({
        next: (response) => {
          this.authService.setToken(response.token);
          this.messageService.add({severity: 'success', summary: 'Login Successfully', detail: `Bienvenido usuario ${username}`, life: 3000})
          this.router.navigate(['/dashboard'])
        },
        error: (error) => {
          console.log('Error de login', error);
          this.messageService.add({severity: 'error', summary: 'Login failed.', detail: `User ${username} not found`, life: 3000});
          this.router.navigate(['/auth']);
        }
      })
    }
  }

}
