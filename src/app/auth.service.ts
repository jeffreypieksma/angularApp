import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';

interface MyData {
  succes: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: Http) { }

  private LoggedInStatus = false;
  private user_id: string;

  get isLoggedIn() {
    return this.LoggedInStatus;
  }

  setLoggedIn(value) {
    this.LoggedInStatus = value;
  }

  authenticate(data) {
    console.log(data);
    const headers = new Headers({
        'Content-Type': 'application/json',
        'api_token': environment.api_token
    });
    return this.http.post<MyData>(environment.api_url + 'login', data, {headers: headers});
  }

  getUserDetails(){
  }

}
