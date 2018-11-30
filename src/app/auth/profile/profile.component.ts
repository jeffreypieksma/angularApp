import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user_profile: Array<any>;
  errorMessage: string;

  constructor(private Auth: AuthService) { }

  ngOnInit() {
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.Auth.getUserDetails().subscribe(
      (response) => {
        console.log(response.json());
        this.user_profile = response.json();
      },
      (error) => {
        console.log(error);
        this.errorMessage = error._body;
      }
    );
  }
}
