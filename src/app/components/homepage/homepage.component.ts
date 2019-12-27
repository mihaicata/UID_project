import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  page = {
    title: 'Home',
    subtitle: 'Welcome To Student Application!',
  };

  constructor() { }

  ngOnInit() {
  }

}
