import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService) {
    this.loginService.statusUpdated.subscribe(
      (firstName: string) => {
        console.log(firstName);
        if(firstName !== null) {
          this.isLoggedIn = true;
          this.firstName = firstName;
        } else {
          this.isLoggedIn = false;
        }
      }
    );
   }

  isLoggedIn: boolean;
  firstName: string;

  ngOnInit() {
  }

}
