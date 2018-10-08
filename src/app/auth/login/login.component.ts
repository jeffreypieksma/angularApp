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
    this.Auth.getUserDetails(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['admin']);
        this.Auth.setLoggedIn(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
