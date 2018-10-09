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

  private LoggedInStatus = false;
  public user_id: string;

  get isLoggedIn() {
    return this.LoggedInStatus;
  }

  setLoggedIn(value) {
    this.LoggedInStatus = value;
    console.log(this.user_id);
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
    const user_id = this.getUserId();
    const headers = new Headers({
      'Content-Type': 'application/json',
      'api_token': environment.api_token
    });
    return this.http.get(environment.api_url + 'user/' + user_id {headers: headers});
  }
}
