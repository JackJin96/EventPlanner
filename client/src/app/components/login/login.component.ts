import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider} from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private authService: AuthService) { }

  user: SocialUser;
  loggedIn: boolean;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
    });
  }

  signInWithGoogle(): void {
    console.log('signin with google triggered!');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      console.log(user);
      this.http.post('http://localhost:8000/api/v1/user', user)
      .subscribe(res => console.log(res));
    });
  }

  signInWithFB(): void {
    console.log('signin with Facebook triggered!');
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      console.log(user);
      this.http.post('http://localhost:8000/api/v1/user', user)
      .subscribe(res => console.log(res));
    });
  }

  signOut(): void {
    console.log('signout triggered!');
    this.authService.signOut().then(user => {
      console.log(user);
    });
  }

}
