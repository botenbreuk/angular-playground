import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule]
})
export class TopBarComponent implements OnInit {
  isAuthenticated: boolean = false;
  currentUser: any;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.authenticated().subscribe(
      (authenticated: boolean) => {
        this.isAuthenticated = authenticated;
        if (authenticated) {
          this.authService.getCurrentUser().subscribe(
            (user: any) => {
              this.currentUser = user;
            },
            error => {
              console.error('Error getting current user:', error);
            }
          );
        }
      },
      error => {
        console.error('Error checking authentication status:', error);
      }
    );
  }
}
