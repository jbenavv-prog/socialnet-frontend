import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private http: HttpClient) {}

  get getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  saveToken(token: string) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }


  getUser() {
    const token = localStorage.getItem(TOKEN_KEY);
    const user = jwt_decode(token!);
    return user;
  }

  logout() {
    localStorage.clear();
  }

  verifyToken() {
    const token = this.getToken;
    return this.http.post(`${environment.apiUrl}/api/auth/authValidation`, {token});
  }
}
