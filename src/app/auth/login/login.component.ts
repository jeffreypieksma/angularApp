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
        console.log(response);
        this.Auth.user_id = response.json().user_id;
        this.Auth.setLoggedIn(true);
        this.router.navigate(['admin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onLogout() {
    window.alert('logged out');
  }

}
