import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-students-activities-table',
  templateUrl: './students-activities-table.component.html',
  styleUrls: ['./students-activities-table.component.css']
})
export class StudentsActivitiesTableComponent implements OnInit {



  @Input() dataSource = [];
  @Input() buttonName: string;
  displayedColumns: string[] = ['Id', 'Student Name', 'Group', 'Button'];
  @Output() view = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick(idStudent: number) {
    this.view.emit(idStudent);
  }

}
