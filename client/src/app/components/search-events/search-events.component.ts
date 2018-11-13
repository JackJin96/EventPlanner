import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _def } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.scss']
})
export class SearchEventsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  title = 'EventPlanner';

  location = "";
  start_date = "";
  display_start_date = "";
  end_date = "";
  display_end_date = "";
  location_within = 10;
  EB_events = [];
  TM_events = [];

  submitted = false;

  get_substr(s) {
    return s.substring(0,500);
  }

  callServer(port) {
    const EB_headers = new HttpHeaders()
          // .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS')
          .set('location.address', this.location)
          .set('location.within', this.location_within + 'mi')
          .set('start_date.range_start', this.start_date)
          .set('start_date.range_end', this.end_date);

    this.http.get(`http://localhost:${port}/api/events/EB`, {headers: EB_headers})
    .subscribe(data => {
      console.log(typeof(data));
      console.log(data);
      const events = [];
      Object.keys(data).forEach(key => {
        // console.log(data[key].description.text.length);
        events.push({ url: data[key].url,
                      name: data[key].name,
                      date: data[key].start.local.substring(0,10),
                      description_text: (data[key].description.text.length > 500)?
                                     data[key].description.text.substring(0, 500) :
                                     data[key].description.text,
                      website: "EventBrite" });
      });
      console.log(events);
      this.EB_events = events;
    });

    const TM_headers = new HttpHeaders()
          // .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS')
          .set('location.address', this.location)
          .set('location.within', this.location_within.toString())
          .set('start_date.range_start', this.start_date)
          .set('start_date.range_end', this.end_date);

    this.http.get(`http://localhost:${port}/api/events/TM`, {headers: TM_headers})
    .subscribe(data => {
      console.log(typeof(data));
      console.log(data);
      const events = [];
      Object.keys(data).forEach(key => {
        // console.log(data[key].description.text.length);
        events.push({ url: data[key].url,
                      name: data[key].name,
                      date: data[key].dates.start.localDate,
                      description_text: data[key].info ? ((data[key].info.length > 500)?
                                     data[key].info.substring(0, 500) :
                                     data[key].info): "",
                      website: "TicketMaster" });
      });
      console.log(events);
      this.TM_events = events;
    });
  }

  onSubmit(form: NgForm){
    this.submitted = true;
    this.location = form.form.value.location;
    this.location_within = (form.form.value.search_range == "") ? this.location_within : form.form.value.search_range;
    this.display_start_date = form.form.value.start_date;
    this.start_date = (form.form.value.start_date == "") ? "" : form.form.value.start_date + 'T00:00:00Z';
    this.display_end_date = form.form.value.end_date;
    this.end_date = (form.form.value.end_date == "") ? "" : form.form.value.end_date + 'T00:00:00Z';
    console.log(this.location);
    console.log(this.location_within);
    console.log(this.display_start_date);
    console.log(this.display_end_date);
    this.callServer(8000);
  }
}