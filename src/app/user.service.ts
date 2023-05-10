import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient, private router:Router) {}


  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response: any) => {
        this.setToken(response.token);
        this.router.navigate(['/users']);
      })
    );
  }



  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  // Get the token from the local storage or session storage
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Remove the token from the local storage or session storage
  removeToken(): void {
    localStorage.removeItem('auth_token');
  }
}
