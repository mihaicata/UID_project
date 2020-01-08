import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-grades-page',
  templateUrl: './student-grades-page.component.html',
  styleUrls: ['./student-grades-page.component.css']
})
export class StudentGradesPageComponent implements OnInit {

  @Input() title = 'Curs';

  constructor() { }

  ngOnInit() {
  }

}
