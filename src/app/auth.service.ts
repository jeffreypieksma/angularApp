import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';

interface myData {
  succes: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: Http) { }

  private LoggedInStatus = false;

  get isLoggedIn() {
    return this.LoggedInStatus;
  }

  setLoggedIn(value) {
    this.LoggedInStatus = value;
  }

  getUserDetails(data) {
    console.log(data);
    const headers = new Headers({
        'Content-Type': 'application/json',
        'api_token': environment.api_token
    });
    return this.http.post<myData>(environment.api_url + 'login', data, {headers: headers});
  }

}
