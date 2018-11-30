import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  errorMessage: string;


  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  ngOnInit() {
  }

  onSubmit() {
    this.Auth.authenticate(this.loginForm.value).subscribe(
      (response) => {
        const token = response.json().token;
        this.Auth.setLoggedIn(true, token);
        this.router.navigate(['profile']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = error._body;
      }
    );
  }

  onLogout() {
    this.Auth.logout();
    this.router.navigate(['login']);
  }

}
