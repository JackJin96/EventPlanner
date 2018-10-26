import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
//import { EventPageComponent } from './event-page/event-page.component';
import { fromEventPattern } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { _def } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http:HttpClient) { }

  title = 'EventPlanner';

  location = "";
  start_date = "";
  display_start_date = "";
  end_date = "";
  display_end_date = "";
  search_range = 10;
  events = {};

  // getCat() {
  //   const headerDict = {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //     'Access-Control-Allow-Headers': 'Content-Type',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,PUT,OPTIONS'
  //   };
  //   const requestOptions = {                                                                                                                                                                                 
  //     headers: new HttpHeaders(headerDict),
  //   };

  //   return this.http.get('localhost:8000/api/cats', requestOptions).subscribe(data => {
  //     console.log(data);
  //     this.cats = data;
  //   });
  // }

  submitted = false;

  callServer(port) {
    const headers = new HttpHeaders()
          // .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS')
          .set('location.address', this.location)
          .set('location.within', this.search_range + 'mi')
          .set('start_date.range_start', this.start_date)
          .set('start_date.range_end', this.end_date);

    // ports:
    // :3000 - to call nodejs server
    // :3001 - to call aspnet core server
    // this.http.post<Message>(`http://127.0.0.1:${port}/ping`, JSON.stringify(this.user), {
    //   headers: headers
    // })
    // .subscribe(data => {
    //   console.log(data);

    // const params = new HttpParams()
    //               .set('location.address','Boston, MA 02215')
    //               .set('start_date.range_start', '2018-11-08T15:41:05Z')
    //               .set('start_date.range_end', '2018-11-10T15:41:05Z');

    this.http.get(`http://localhost:${port}/api/events`, {headers: headers})
    .subscribe(data => {
      console.log(data);
      this.events = JSON.stringify(data);
    });
  }

  onSubmit(form: NgForm){
    this.submitted = true;
    this.location = form.form.value.location;
    this.search_range = form.form.value.search_range;
    this.display_start_date = form.form.value.start_date;
    this.start_date = (form.form.value.start_date == "") ? "" : form.form.value.start_date + 'T00:00:00Z';
    this.display_end_date = form.form.value.end_date;
    this.end_date = (form.form.value.end_date == "") ? "" : form.form.value.end_date + 'T00:00:00Z';
    console.log(this.location);
    console.log(this.search_range);
    console.log(this.display_start_date);
    console.log(this.display_end_date);
    this.callServer(8000);
  }

  }

  


