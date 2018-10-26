import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EventPlanner';
  
  location = "";
  date = "";

  submitted = false;

  onSubmit(form: NgForm){
    this.submitted = true;
    this.location = form.form.value.location;
    this.date = form.form.value.date;
  }

  }

  


