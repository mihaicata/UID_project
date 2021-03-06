import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../student';

@Component({
  selector: 'app-graded-activities',
  templateUrl: './graded-activities.component.html',
  styleUrls: ['./graded-activities.component.css']
})
export class GradedActivitiesComponent implements OnInit {


  @Input() title: string;
  @Input() dataSource: Student[];
  @Input() buttonName: string;

  @Output() view = new EventEmitter<number>();
  @Output() postGrade = new EventEmitter<{id: number, grade: number}>();

  constructor() { }

  ngOnInit() {
  }

  onView(idStudent: number) {
    this.view.emit(idStudent);
  }
  onPostGrade({id, grade}) {
    this.postGrade.emit({id,  grade});
  }
}
