import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user';

interface LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onLogin() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value as LoginData; // Cast as LoginData

      this.authService.login(loginData).subscribe(
        (user: User) => {
          // Handle successful login (e.g., navigate to another page)
          this.authService.setCurrentUser(user);
          this.router.navigateByUrl('/');
        },
        error => {
          // Handle login errors (e.g., display error message to user)
          console.error('Login error:', error);
        }
      );
    }
  }
}
