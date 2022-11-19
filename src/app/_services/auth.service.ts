import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signup() {
    console.log('Auth Service works!')
    console.log(environment.apiUrl);
  }
}
