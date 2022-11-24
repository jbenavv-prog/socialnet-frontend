import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

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
}
