import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: Http) { }

  isLoggedIn() {
    if (!localStorage.getItem('api_token')){ return false; }
    return true;
  }

  getToken(){
    return localStorage.getItem('api_token');
  }

  setLoggedIn(status, token) {
    localStorage.setItem('loggedIn', status);
    localStorage.setItem('api_token', token);
  }

  authenticate(data) {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    return this.http.post(environment.api_url + 'login', data, {headers: headers});
  }

  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('api_token');
  }

  getUserDetails() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('api_token')
    });
    return this.http.get(environment.api_url + 'user', {headers: headers});
  }
}
