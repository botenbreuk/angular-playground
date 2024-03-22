import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent {
  username = new FormControl();
  password = new FormControl();
  error?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  resetErrors() {
    this.error = undefined;
  }

  login() {
    const { success, message } = this.authService.login(
      this.username.value,
      this.password.value
    );
    if (success) {
      this.router.navigateByUrl('/');
    } else {
      this.error = message;
    }
  }
}
