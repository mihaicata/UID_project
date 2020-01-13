import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../student';
import {StudentsActivitiesService} from '../../core/services/students-activities.service';

@Component({
  selector: 'app-quizzes-page',
  templateUrl: './quizzes-page.component.html',
  styleUrls: ['./quizzes-page.component.css']
})
export class QuizzesPageComponent implements OnInit {

  dataSource: Student[];
  @Output() view = new EventEmitter<number>();

  constructor(private studentsActivitiesService: StudentsActivitiesService) { }

  ngOnInit() {
    this.dataSource = this.studentsActivitiesService.studentsForActivities;
  }

  onView(idStudent: number) {
    this.view.emit(idStudent);
  }
}
