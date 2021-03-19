import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // TODO: make enviornmental variable
  private apiUrl: string = 'http://localhost:1337/api/v1/';

  constructor(
    private http: HttpClient,
  ) { }

  getAuthStatus() {
    return this.http
    .get(this.apiUrl + 'auth/status');
  }

  login(payload: object) {
    return this.http
    .post(this.apiUrl + 'auth/login', payload);
  }

  signup(payload: object) {
    return this.http
    .post(this.apiUrl + 'auth/signup', payload);
  }

}
