import { Injectable } from '@angular/core';
import {Announcement} from '../models/announcement';
import {Course} from '../models/course';
import {LecturesService} from './lectures.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  private courses: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>(null);
  constructor(private lecturesService: LecturesService) { }

  initCourses() {
    const courses: Course[] = [];
    const course1 = new Course();
    const course2 = new Course();
    let lectures: string[] = [];
    course1.title = 'User Interface Design';
    course1.mainProfessor = 'Dorian Gorgan';
    course1.assistantProfessor = 'Crinela Potinteu - Teodor Stefanut';
    course1.progress = 40;
    // tslint:disable-next-line:max-line-length
    course1.image = 'https://f5-studio.com/wp-content/uploads/2018/07/ui-in-blog.jpg';
    course1.reviews = [];
    lectures = this.lecturesService.initUID();
    course1.lectures = lectures;

    course2.title = 'Fundamental Algorithms';
    course2.mainProfessor = 'Rodica Potolea';
    course2.assistantProfessor = 'Camelia Lemnaru - Florin Balint';
    course2.progress = 70;
    course2.image = 'https://www.stephotec.com/wp-content/uploads/2018/12/algorithm-2.png';
    course2.reviews = [];
    lectures = this.lecturesService.initFA();
    course2.lectures = lectures;
    courses.push(course1);
    courses.push(course2);
    this.courses.next(courses);

    console.log('service', courses);
    return courses;
  }

  setCourses(course: Course) {
    const courses = this.courses.value;
    courses.filter((c: Course) => c.title === course.title)
      .map((c: Course) => Object.assign(c, course)
  )

    console.log(courses);
    this.courses.next(courses);
  }

  get coursesValue() {
   return this.courses.value;
  }
}
