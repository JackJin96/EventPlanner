import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) {}

   user: SocialUser;
   isLoggedIn: boolean;
   firstName: string;

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.isLoggedIn = (user !== null);
      if (user) {
        this.firstName = user.firstName;
        this.getInterestedEvents();
      }
    });
  }

  events: Array<Object> = [];

  getInterestedEvents = () => {
    const getHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Headers', 'Content-Type')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');

    const getParams = new HttpParams()
      .set('user_email', this.user.email);

    this.http.get('http://localhost:8000/api/v1/user/events',
                  {headers: getHeaders, params: getParams})
    .subscribe(events => {
      if (events) {
        for (const key in events) {
          this.events.push(events[key]);
        }
      }
      console.log(this.events);
    });
  }

  deleteEvent = () => {
    // complete the http delete request
    // backend delete endpoint is already working
  }
}