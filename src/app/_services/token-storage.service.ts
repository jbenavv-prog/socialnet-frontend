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
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }


  getUser() {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    const user = jwt_decode(token!);
    return user;
  }

  logout() {
    window.sessionStorage.clear();
  }

  verifyToken() {
    const token = this.getToken;
    return this.http.post(`${environment.apiUrl}/api/auth/authValidation`, {token});
  }
}
