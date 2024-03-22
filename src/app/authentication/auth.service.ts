import { Injectable } from '@angular/core';

const users = [
  { username: 'admin', password: 'password', name: 'Admin van der Lange' },
  { username: 'sjonnyb', password: 'password', name: 'Sjonny Bever' }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;
  private currentUser?: { name: string };

  constructor() {
    this.authenticated = JSON.parse(localStorage.getItem('authenticated') || 'false');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  login(username?: string, password?: string) {
    const user = users.find(v => v.username === username);

    if (user) {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authenticated = true;
      this.currentUser = user;

      return { success: true, message: undefined };
    } else {
      return { success: false, message: 'Incorrect credentials' };
    }
  }

  logout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('currentUser');
    this.authenticated = false;
    this.currentUser = undefined;
  }

  getCurrent() {
    return this.currentUser;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
