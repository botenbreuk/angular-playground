import { AfterContentChecked, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink]
})
export class TopBarComponent implements AfterContentChecked {
  authenticated: boolean = false;
  curerentUser?: { name: string };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authenticated = authService.isAuthenticated();
    this.curerentUser = authService.getCurrent();
  }

  ngAfterContentChecked(): void {
    this.authenticated = this.authService.isAuthenticated();
    this.curerentUser = this.authService.getCurrent();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
