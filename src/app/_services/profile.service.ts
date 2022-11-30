import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  uploadPhotoProfile(photoProfile: any) {
    return this.http.put(
      `${environment.apiUrl}/api/profile/updatePhotoProfile`,
      photoProfile
    );
  }
}
