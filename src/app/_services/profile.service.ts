import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  headers = new HttpHeaders({
    token: this.tokenService.getToken!,
  });
  constructor(
    private http: HttpClient,
    private tokenService: TokenStorageService
  ) {}

  uploadPhotoProfile(photoProfile: any) {
    return this.http.post(
      `${environment.apiUrl}/api/profile/updatePhotoProfile`,
      photoProfile,
      { headers: this.headers }
    );
  }

  getProfile() {
    return this.http.get(`${environment.apiUrl}/api/profile/getProfile`, {
      headers: this.headers,
    });
  }
}
