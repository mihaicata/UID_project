import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-course-activities',
  templateUrl: './teacher-course-activities.component.html',
  styleUrls: ['./teacher-course-activities.component.css']
})
export class TeacherCourseActivitiesComponent implements OnInit {


  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.navLinks = [

      {
        label: 'Assignments',
        link: 'assignments',
        index: 0
      }, {
        label: 'Quizzes',
        link: 'quizzes',
        index: 1
      }, {
        label: 'Projects',
        link: 'projects',
        index: 2
      },
      {
        label: 'Exams',
        link: 'exams',
        index: 3
      }
    ];

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === this.router.url));
    });
  }
}




