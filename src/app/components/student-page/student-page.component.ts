import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {Announcement} from '../../core/models/announcement';
import {AnnouncementService} from '../../core/services/announcement.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CourseService} from '../../core/services/course.service';
import {Course} from '../../core/models/course';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Review} from '../../core/models/review';
@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})

export class StudentPageComponent implements OnInit {
  viewAnnouncements: boolean;
  viewCourses: boolean;
  viewCourseDetails: boolean;
  seeFormReview: boolean;
  announcements: Announcement[];
  courses: Course[];
  activeCourse: Course;
  liked: number[] = [];
  selected: string[] = [];
  grades: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  form: FormGroup;
  displayedColumns: string[] = ['lectureTitle', 'professorMark', 'professorReview', 'courseMark', 'courseReview'];
  seeReviews: boolean;

  constructor(private announcementService: AnnouncementService, private snackBar: MatSnackBar, private courseService: CourseService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
	this.viewCourseDetails = false;
    this.viewAnnouncements = false;
    this.viewCourses = false;
    this.seeFormReview = false;
    this.seeReviews = false;
    this.announcements = this.announcementService.initAnnouncements();
    this.courses = this.courseService.initCourses();
    this.form = this.formBuilder.group
    ({
      lectureName: new FormControl(''),
      teacherGrade: new FormControl( ''),
      teacherReview: new FormControl( ''),
      lectureGrade: new FormControl( ''),
      lectureReview: new FormControl( '')
    });
    this.activeCourse = this.courses[0];
  }

  seeCourses() {
    this.viewCourses = this.viewCourses !== true;
    this.viewAnnouncements = false;
    this.seeFormReview = false;
    this.seeReviews = false;
	this.viewCourseDetails = false;
  }

  seeAnnouncements() {
    this.viewAnnouncements = this.viewAnnouncements !== true;
    this.viewCourses = false;
    this.seeFormReview = false;
    this.seeReviews = false;
	this.viewCourseDetails = false;
  }

  seeChat() {
    console.log('Chat');
  }
  
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000
    });
  }

  like(announcement: Announcement) {

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.announcements.length; i++) {
      if (announcement.title === this.announcements[i].title) {
        if (this.liked.includes(i)) {
          this.announcements[i].likes -= 1;
          const index = this.liked.indexOf(i, 0);
          this.liked.splice(index, 1);
        } else {
          this.openSnackBar('CONGRATS FOR LIKING AN ANNOUNCEMENT!!!');
          this.announcements[i].likes += 1;
          this.liked.push(i);
        }
      }
    }
  }

  openCourse(element: Course) {
	this.selected = element.lectures;
	this.viewCourseDetails = this.viewCourseDetails !== true;
	this.viewCourses = false;
    this.seeFormReview = false;
    this.seeReviews = false;
	this.viewAnnouncements = false;

    console.log(element.title);
  }

  seeReview(element: Course) {
    this.selected = element.lectures;
    this.activeCourse = element;
    this.seeReviews = true;
    this.viewCourses = false;
    this.viewAnnouncements = false;
    this.seeFormReview = false;
	this.viewCourseDetails = false;
  }

  leaveReview(element: Course) {
    this.selected = element.lectures;
    this.seeFormReview = this.seeFormReview !== true;
    this.viewAnnouncements = false;
    this.viewCourses = false;
    this.seeReviews = false;
	this.viewCourseDetails = false;
  }

  submitReview() {
    const localReview = new Review();
    localReview.title = this.form.get('lectureName').value;
    localReview.professorMark = this.form.get('teacherGrade').value;
    localReview.professorReview = this.form.get('teacherReview').value;
    localReview.courseMark = this.form.get('lectureGrade').value;
    localReview.courseReview = this.form.get('lectureReview').value;
    this.openSnackBar('CONGRATS FOR LEAVING A REVIEW!!!');
    this.seeFormReview = false;
    this.viewCourses = true;
	this.viewCourseDetails = false;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.courses.length; i++) {
      // tslint:disable-next-line:prefer-for-of
      for (let j = 0; j < this.courses[i].lectures.length; j++) {
        if (this.courses[i].lectures[j] === localReview.title) {
          this.courses[i].reviews.push(localReview);
        }
      }
    }
  }
}
