import { Component, OnInit } from '@angular/core';
import { CatService } from '../events.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  constructor(private catService:CatService) { }

  ngOnInit() {
  }

  cats = () => this.catService.getAllCats();
}
