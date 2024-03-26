import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule]
})
export class TopBarComponent implements AfterContentChecked, OnInit {
  currentUser?: User;
  authenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngAfterContentChecked(): void {
    this.authenticated = this.authService.isAuthenticatedUser();
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  share() {
    window.alert('The product has been shared!');
  }
}
