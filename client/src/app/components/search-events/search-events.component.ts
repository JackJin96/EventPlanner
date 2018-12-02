import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { _def } from '@angular/core/src/view/provider';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

import { Event } from '../../models/event.model';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.scss']
})
export class SearchEventsComponent implements OnInit {

  constructor(private http:HttpClient, private authService:AuthService) { }

  user: SocialUser;
  isLoggedIn: boolean;
  user_email: string;

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.isLoggedIn = (user !== null);
      if (user) {
        this.user_email = user.email;
      }
    });
  }

  title = 'EventPlanner';

  location = "";
  start_date = "";
  display_start_date = "";
  start_date_date = new Date();
  end_date = "";
  display_end_date = "";
  search_range = 10;
  EB_events = [];
  TM_events = [];
  DEAULT_IMG_URL = "https://d1fofpanmqww7d.cloudfront.net/wp-content/uploads/2018/04/Events.jpg";

  submitted = false;

  get_substr(s) {
    return s.substring(0,500);
  }

  getEvents(port) {
    const EB_headers = new HttpParams()
          // .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS')
          .set('location.address', this.location)
          .set('location.within', this.search_range + 'mi')
          .set('start_date.range_start', this.start_date)
          .set('start_date.range_end', this.end_date);

    this.http.get(`http://localhost:${port}/api/v1/events/EB`, {params: EB_headers})
    .subscribe( (data:any) => {
      // console.log(typeof(data));
      // console.log(data);
      const eventsRes: Event[] = [];
      Object.keys(data).forEach(key => {
        eventsRes.push({ url: data[key].url,
                         name: data[key].name.text,
                         date: data[key].start.local.substring(0,10),
                         desc: (data[key].description.text &&
                                          data[key].description.text.length > 500)?
                                          data[key].description.text.substring(0, 500) :
                                          data[key].description.text,
                         website: "EventBrite",
                         img: data[key].logo ? data[key].logo.url : this.DEAULT_IMG_URL });
      });
      console.log(eventsRes);
      this.EB_events = eventsRes;
    });

    const TM_headers = new HttpParams()
          // .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS')
          .set('location.address', this.location)
          .set('location.within', this.search_range.toString())
          .set('start_date.range_start', this.start_date)
          .set('start_date.range_end', this.end_date)
          .set('size', '50');

    this.http.get(`http://localhost:${port}/api/v1/events/TM`, {params: TM_headers})
    .subscribe(data => {
      // console.log(typeof(data));
      // console.log(data);
      const events: Event[] = [];
      Object.keys(data).forEach(key => {
        let imgurl = '';
          Object.keys(data[key].images).forEach(imgkey => {
            const image = data[key].images[imgkey]
            if(image.ratio === '16_9' && image.width === 640) {
                imgurl = image.url;
            }
          });
        events.push({ url: data[key].url,
                      name: data[key].name,
                      date: data[key].dates.start.localDate,
                      desc: data[key].info ? ((data[key].info.length > 500)?
                                     data[key].info.substring(0, 500) :
                                     data[key].info): "",
                      website: "TicketMaster",
                      img: imgurl ? imgurl: this.DEAULT_IMG_URL });
      });
      console.log(events);
      this.TM_events = events;
    });
  }


  
  // MAKE SURE THE INPUTS ARE VALID, IF NOT THEN THROW
  onSubmit(form: NgForm){
    this.submitted = true;
    this.location = form.form.value.location;
    this.search_range = (form.form.value.search_range == "") ? this.search_range : form.form.value.search_range
    if ( isNaN(Number(this.search_range)) ) {
      alert('Please enter a valid Search Range');
    }
    if ( Number(this.search_range <= 0 || this.search_range > 50)) {
      alert('Please enter a Search Range between 1 and 50')
    }
    this.display_start_date = form.form.value.start_date;
    this.start_date = (form.form.value.start_date == "") ? "" : form.form.value.start_date + 'T00:00:00Z';
    this.display_end_date = form.form.value.end_date;
    this.end_date = (form.form.value.end_date == "") ? "" : form.form.value.end_date + 'T00:00:00Z';
    console.log(this.location);
    console.log(this.search_range);
    console.log(this.display_start_date);
    console.log(this.display_end_date);

    this.getEvents(8000);
  }

  clickInterested(event){
    if (this.isLoggedIn) {
      this.http.post('http://localhost:8000/api/v1/events', {event: event, user_email: this.user_email})
      .subscribe(response => {
        console.log(response)
      });
      console.log('User:');
      console.log(this.user_email);
      console.log('Event interested: ');
      console.log(event);
    } else {
      // can be 'beautified' by using some other UI alert library
      alert('You are not logged in. Please log in to use this funtionality!');
    }
  }
}
