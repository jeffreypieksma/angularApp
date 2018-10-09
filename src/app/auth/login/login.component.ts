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
    email: new FormControl('admin@admin.com', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('admin', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  ngOnInit() {
  }

  onSubmit() {
    this.Auth.authenticate(this.loginForm.value).subscribe(
      (response) => {
        this.Auth.setLoggedIn(true, response.json().user_id);
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
