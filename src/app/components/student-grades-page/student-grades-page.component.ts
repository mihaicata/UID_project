import {Component, Input, OnInit} from '@angular/core';
import {GradesUIDService} from '../../core/services/gradesUID.service';
import {AssignmentsService} from '../../core/services/assignments.service';
import {ExamsService} from '../../core/services/exams.service';
import {ProjectsService} from '../../core/services/projects.service';
import {QuizzesService} from '../../core/services/quizzes.service';

@Component({
  selector: 'app-student-grades-page',
  templateUrl: './student-grades-page.component.html',
  styleUrls: ['./student-grades-page.component.css']
})
export class StudentGradesPageComponent implements OnInit {

  @Input() title = 'Curs';
  @Input() studentId: number;

  constructor(private gradesUIDService: GradesUIDService,
              private assignmentsService: AssignmentsService,
              private examsService: ExamsService,
              private projectsService: ProjectsService,
              private quizzesService: QuizzesService) { }

  ngOnInit() {
  }

  get assignmentsGrades() {
    const stud = this.assignmentsService.assignmentsStudentsValue.find(student => student.id === this.studentId);
    return stud.grade;
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
