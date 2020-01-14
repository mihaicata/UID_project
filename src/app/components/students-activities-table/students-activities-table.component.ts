import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-students-activities-table',
  templateUrl: './students-activities-table.component.html',
  styleUrls: ['./students-activities-table.component.css']
})
export class StudentsActivitiesTableComponent implements OnInit {



  @Input() dataSource = [];
  @Input() buttonName: string;
  displayedColumns: string[] = ['Id', 'Student Name', 'Group', 'Button', 'Grade', 'Send'];
  @Output() view = new EventEmitter<number>();
  @Output() postGrade = new EventEmitter<{id: number, grade: number}>();


  control: FormControl;
  constructor() { }

  ngOnInit() {

    this.control = new FormControl('' , [Validators.required, Validators.max(10), Validators.min(0)]);

  }

  onClick(idStudent: number) {
    this.view.emit(idStudent);
  }

  onPostGrade(idStudent: number) {
    console.log('TABLE', idStudent);
    console.log(this.control.value);
    this.postGrade.emit({id: idStudent, grade: +this.control.value});
  }
}
