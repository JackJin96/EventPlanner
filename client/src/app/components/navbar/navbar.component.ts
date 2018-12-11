import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) {}

   user: SocialUser;
   isLoggedIn: boolean;
   firstName: string;

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.isLoggedIn = (user !== null);
      if (user) {
        this.firstName = user.firstName;
      }
    });
  }



}
