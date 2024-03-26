import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = '/api';
  private currentUser?: User;
  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient) {}

  // Login method
  login(credentials: { username: string; password: string }): Observable<User> {
    return this.http.post<User>(this.api + '/authentication', credentials);
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
    this.isAuthenticated = true;
  }

  // Fetch the current user
  fetchCurrentUser(): Observable<User> {
    return this.http.get<User>(this.api + '/authentication/current').pipe(
      tap(user => {
        this.currentUser = user;
        this.isAuthenticated = true;
      })
    );
  }

  // Get the current user
  getCurrentUser(): User | undefined {
    return this.currentUser;
  }

  // Logout method
  logout(): Observable<void> {
    return this.http.delete<void>(this.api + '/authentication').pipe(
      tap(() => {
        this.currentUser = undefined;
        this.isAuthenticated = false;
      })
    );
  }

  // Check if user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
