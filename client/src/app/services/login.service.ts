import { Injectable, EventEmitter } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  users = {}
  statusUpdated = new EventEmitter<string>();
  isLoggedIn;

  // addUser = (SocialUser) => {
  //   const email = SocialUser.email
  //   const newUser = {
  //     name: SocialUser.name,
  //     firstName: SocialUser.firstName,
  //     lastName: SocialUser.lastName,
  //     email: SocialUser.email,
  //     photoUrl: SocialUser.photoUrl
  //   }
  //   this.users[email] = newUser;
  //   console.log(this.users[email]);
  //   console.log(this.users);
  // }

  logOut = () => {
    this.isLoggedIn = false;
  }

  logIn = () => {
    this.isLoggedIn = true;
  }

  checkLogin = () => this.isLoggedIn;

  // isLoggedIn = (SocialUser) => {
  //   const email = SocialUser.email;
  //   Object.keys(this.users).forEach(key => {
  //     if(this.users[key].email === email) {
  //       return true;
  //     }
  //   });
  //   return false;
  // }

  // isLoggedIn = () => {
  //   if(Object.keys(this.users).length === 0) {
  //     return false;
  //   }
  //   return true;
  // }

  // getFristName = () => {
  //   if(Object.keys(this.users).length !== 0) {
  //     // console.log(this.users);
  //     return this.users[0].firstName;
  //   }
  //   return null;
  // }

}
