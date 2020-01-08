import {Component, Input, OnInit} from '@angular/core';
import {GradesUIDService} from '../../core/services/gradesUID.service';

@Component({
  selector: 'app-student-grades-page',
  templateUrl: './student-grades-page.component.html',
  styleUrls: ['./student-grades-page.component.css']
})
export class StudentGradesPageComponent implements OnInit {

  @Input() title = 'Curs';

  constructor(private gradesUIDService: GradesUIDService) { }

  ngOnInit() {
  }

  get assignmentsGrades() {
    return this.gradesUIDService.assignmentsGrades;
  }

  get quizzesGrades() {
    return this.gradesUIDService.quizzesGrades;
  }

  get projectGrades() {
    return this.gradesUIDService.projectGrades;
  }

  get examsGrades() {
    return this.gradesUIDService.examsGrades;
  }
}
