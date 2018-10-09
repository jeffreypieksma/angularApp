import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user_profile: Array<any>;

  constructor(private Auth: AuthService) { }

  ngOnInit() {
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.Auth.getUserDetails().subscribe(
      (response) => {
        this.user_profile =  response.json().user;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
