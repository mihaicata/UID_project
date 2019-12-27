import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  seeCourses() {
    console.log('Courses');
  }

  seeAnnouncements() {
    console.log('Announcements');
  }

  seeChat() {
    console.log('Chat');
  }
}
