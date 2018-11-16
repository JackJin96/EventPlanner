import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider} from "angularx-social-login";
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private loginService: LoginService) { }

  user: SocialUser;
  loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    console.log('signin with google triggered!');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      // this.loginService.addUser(user);
      this.loginService.logIn();
      this.loginService.statusUpdated.emit(user.firstName);
    });
  }

  signInWithFB(): void {
    console.log('signin with Facebook triggered!');
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      // this.loginService.addUser(user);
      this.loginService.logIn();
      this.loginService.statusUpdated.emit(user.firstName);
    });
  }

  signOut(): void {
    console.log('signout triggered!');
    this.authService.signOut().then(user => {
      this.loginService.logOut();
      this.loginService.statusUpdated.emit(null);
    });
  }

}
