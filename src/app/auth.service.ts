import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';

// interface MyData {
//   succes: boolean;
//   message: string;
// }

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: Http) { }

  getUserId() {
    return localStorage.getItem('user_id');
  }


  isLoggedIn() {
    if (localStorage.getItem('user_id')) {
      return true;
    } else {
      return false;
    }
  }

  setLoggedIn(status, user_id) {
    localStorage.setItem('loggedIn', status);
    localStorage.setItem('user_id', user_id);
  }

  authenticate(data) {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'api_token': environment.api_token
    });
    return this.http.post(environment.api_url + 'login', data, {headers: headers});
  }

  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user_id');
  }
  getUserDetails() {
    const user_id = JSON.stringify({user_id: this.getUserId()});

    const headers = new Headers({
      'Content-Type': 'application/json',
      'api_token': environment.api_token
    });
    return this.http.post(environment.api_url + 'user/details',  user_id {headers: headers});
  }
}
