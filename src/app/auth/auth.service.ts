import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string;

  constructor(private http: HttpClient) {
    this.api = '/api';
  }

  login(credentials: { username: string; password: string }): Observable<User> {
    console.log(credentials);
    return this.http.post<User>(this.api + '/authentication', credentials);
  }

  authenticated(): Observable<boolean> {
    return this.http
      .get<boolean>('/authentication/current')
      .pipe(map((authResult: any) => !!authResult.user));
  }

  setUser(user: User) {
    return this.http.post(this.api + '/authentication/current', user);
  }

  //get the current user from the backend and return it using /current
  getCurrentUser(): Observable<any> {
    return this.http.get<any>(this.api + '/authentication/current');
  }

  //logout the current user
  logout() {
    return this.http.post(this.api + '/logout', {});
  }
}
