import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-activity-graded-page',
  templateUrl: './activity-graded-page.component.html',
  styleUrls: ['./activity-graded-page.component.css']
})
export class ActivityGradedPageComponent implements OnInit {


   titleActivity: string;
   courseName: string;
   activityTitle: string;

   studentName: string;
   studentGroup: string;

  control: FormControl;
  constructor() { }

  ngOnInit() {

    this.control = new FormControl('' , [Validators.required, Validators.max(10), Validators.min(0)]);
  }

  onAssignGrade() {

  }

}
