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

  title: string;
  location: string;
  start_date: string;
  display_start_date: string;
  start_date_date: Date;
  end_date: string;
  display_end_date: string;
  search_range: number;
  EB_events: Array<any>;
  TM_events: Array<any>;
  DEAULT_IMG_URL: string;
  submitted: boolean;

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.isLoggedIn = (user !== null);
    });

    this.title = 'EventPlanner';

    this.location = "";
    this.start_date = "";
    this.display_start_date = "";
    this.start_date_date = new Date();
    this.end_date = "";
    this.display_end_date = "";
    this.search_range = 10;
    this.EB_events = [];
    this.TM_events = [];
    this.DEAULT_IMG_URL = "https://d1fofpanmqww7d.cloudfront.net/wp-content/uploads/2018/04/Events.jpg";

    this.submitted = false;

    const cache_headers = new HttpHeaders()
          // .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');

    // get cache (last searched results)
    this.http.get('http://localhost:8000/api/v1/events/cache', {headers:cache_headers})
             .subscribe(data => {
                if (data) {
                  // EB:
                  Object.keys(data['EB']).forEach(key => {
                    this.EB_events.push({ url: data['EB'][key].url,
                                     name: data['EB'][key].name.text,
                                     date: data['EB'][key].start.local.substring(0,10),
                                     desc: (data['EB'][key].description.text &&
                                                      data['EB'][key].description.text.length > 500)?
                                                      data['EB'][key].description.text.substring(0, 500) :
                                                      data['EB'][key].description.text,
                                     website: "EventBrite",
                                     img: data['EB'][key].logo ? data['EB'][key].logo.url : this.DEAULT_IMG_URL });
                  });
                  //TM:
                  Object.keys(data['TM']).forEach(key => {
                    let imgurl = '';
                      Object.keys(data['TM'][key].images).forEach(imgkey => {
                        const image = data['TM'][key].images[imgkey]
                        if(image.ratio === '16_9' && image.width === 640) {
                            imgurl = image.url;
                        }
                      });
                    this.TM_events.push({ url: data['TM'][key].url,
                                  name: data['TM'][key].name,
                                  date: data['TM'][key].dates.start.localDate,
                                  desc: data['TM'][key].info ? ((data['TM'][key].info.length > 500)?
                                                 data['TM'][key].info.substring(0, 500) :
                                                 data['TM'][key].info): "",
                                  website: "TicketMaster",
                                  img: imgurl ? imgurl: this.DEAULT_IMG_URL });
                  });
                  this.submitted = true;
                }
             });
  }

  get_substr(s) {
    return s.substring(0,500);
  }

  getEvents(port) {
    const EB_headers = new HttpHeaders()
          // .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');

    const EB_params = new HttpParams()
          .set('location.address', this.location)
          .set('location.within', this.search_range + 'mi')
          .set('start_date.range_start', this.start_date)
          .set('start_date.range_end', this.end_date);

    this.http.get(`http://localhost:${port}/api/v1/events/EB`,
                {headers: EB_headers, params: EB_params})
    .subscribe( (data:any) => {
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
      this.EB_events = eventsRes;
    });

    const TM_headers = new HttpHeaders()
          // .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');

    const TM_params = new HttpParams()
          .set('location.address', this.location)
          .set('location.within', this.search_range.toString())
          .set('start_date.range_start', this.start_date)
          .set('start_date.range_end', this.end_date)
          .set('size', '50');

    this.http.get(`http://localhost:${port}/api/v1/events/TM`,
                  {headers: TM_headers, params: TM_params})
    .subscribe(data => {
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
      this.TM_events = events;
    });
  }

  clickInterested(event){
    if (this.isLoggedIn) {
      this.http.post('http://localhost:8000/api/v1/user/event', { event: event, user: this.user })
      .subscribe(eventPosted => {
        alert('You have added: \n\n' + eventPosted['name'] + '\n\n to your profile!');
      });
    } else {
      // can be 'beautified' by using some other UI alert library
      alert('You are not logged in. Please log in to use this funtionality!');
    }
  }

  // MAKE SURE THE INPUTS ARE VALID, IF NOT THEN THROW ERROR ALERT
  onSubmit(form: NgForm){
    this.submitted = true;
    this.location = form.form.value.location;
    this.search_range = (form.form.value.search_range == "") ? this.search_range : form.form.value.search_range

    this.display_start_date = form.form.value.start_date;
    this.start_date = (form.form.value.start_date == "") ? "" : form.form.value.start_date + 'T00:00:00Z';
    //this.checkDates(this.start_date);

    this.display_end_date = form.form.value.end_date;
    this.end_date = (form.form.value.end_date == "") ? "" : form.form.value.end_date + 'T00:00:00Z';
    //this.checkDates(this.end_date);

    if ( isNaN(Number(this.search_range)) ) {
      alert('Please enter a valid Search Range');
    }
    else if ( Number(this.search_range <= 0 || this.search_range > 50)) {
      alert('Please enter a Search Range between 1 and 50')
    }
    else if (this.start_date > this.end_date) {
      alert("Please make start date before end date");
    }
    else{
      this.getEvents(8000);
    }

  }

}
