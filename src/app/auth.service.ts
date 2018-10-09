import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';
import { ArrayType } from '@angular/compiler';

// interface MyData {
//   succes: boolean;
//   message: string;
// }

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: Http) { }
  //Must been set to a cookie 
  private LoggedInStatus = false;
  public user_id: string;

  get isLoggedIn() {
    return this.LoggedInStatus;
  }

  setLoggedIn(value) {
    this.LoggedInStatus = value;
  }

  authenticate(data) {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'api_token': environment.api_token
    });
    return this.http.post(environment.api_url + 'login', data, {headers: headers});
  }

  logout() {
    this.setLoggedIn(false);
    this.user_id = '';
  }

  getUserId() {
    return this.user_id;
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
