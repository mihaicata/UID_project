import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-enrollment-page',
  templateUrl: './enrollment-page.component.html',
  styleUrls: ['./enrollment-page.component.css']
})
export class EnrollmentPageComponent implements OnInit {


  title: string;
  group: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.title = 'Operating System';
    this.group = this.formBuilder.group({
      firstAnswer: ['', Validators.required],
      secondAnswer: ['', Validators.required],
      thirdAnswer: ['', Validators.required],
      enrollmentKey: ['', Validators.required]

    });
  }

  get firstAnswerControl(): FormControl {
    return this.group.get('firstAnswer') as FormControl;
  }


  get secondAnswerControl(): FormControl {
    return this.group.get('secondAnswer') as FormControl;
  }

  get thirdAnswerControl(): FormControl {
    return this.group.get('thirdAnswer') as FormControl;
  }

  get enrollmentKeyControl(): FormControl {
    return this.group.get('enrollmentKey') as FormControl;
  }
}
