import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-activity-graded-page',
  templateUrl: './activity-graded-page.component.html',
  styleUrls: ['./activity-graded-page.component.css']
})
export class ActivityGradedPageComponent implements OnInit {


  @Input() titleActivity = 'Assignment';
  @Input() courseName = 'User Interface Design';
  @Input() activityTitle = 'Assignment1';

  @Input() studentName = 'Andrei Brasoveanu';
  @Input() studentGroup = '30443'

  control: FormControl;
  constructor() { }

  ngOnInit() {

    this.control = new FormControl('', Validators.required);
  }

  onAssignGrade() {

  }

}
