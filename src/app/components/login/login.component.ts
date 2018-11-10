import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider} from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: SocialUser;
  loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  // GOOGLE_PROVIDER_ID = 'const GOOGLE_PROVIDE_ID = 98581285762-kvkc2mk733dbqosb5d1tnjanj2r467c8.apps.googleusercontent.com';
  // FACEBOOK_PROVIDER_ID = '';

  signInWithGoogle(): void {
    console.log('signin with google triggered!');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
    console.log('signin with Facebook triggered!');
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then( x => console.log(x));
  }

  signOut(): void {
    console.log('signout triggered!');
    this.authService.signOut().then(x => console.log(x));
  }

}
