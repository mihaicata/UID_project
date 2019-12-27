import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
@Component({
  selector: 'app-secretary-view-students',
  templateUrl: './secretary-view-students.component.html',
  styleUrls: ['./secretary-view-students.component.css']
})
export class SecretaryViewStudentsComponent implements OnInit {

  students: Student[]=[];
  IsVisible=false;
  student1:Student;
  student2:Student;
  student3:Student;
  student4:Student;
  student5:Student;
  student6:Student;
  levelNum:number;
  levels:Array<Object> = [
      {num: 0, name: "View students enrolled in current year"},
      {num: 1, name: "View students having failed exams"},
      {num: 2, name: "View students having a scholarship"},
      {num: 3, name: "View Erasmus students"},
      {num: 4, name: "View students studying abroad"}
  ];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.student1 = new Student()
    this.student1.country="Romania"
    this.student1.faculty="Electrical Engineering"
    this.student1.firstname="Radu"
    this.student1.lastname="Paraschivescu"
    this.student1.group=40122
    this.student1.university="UTCN"

    this.student2 = new Student()
    this.student2.country="Spain"
    this.student2.faculty="Computer Science"
    this.student2.firstname="Eduardo"
    this.student2.lastname="Gonzalez"
    this.student2.group=40122
    this.student2.university="University of Madrid"

    this.student3 = new Student()
    this.student3.country="Romania"
    this.student3.faculty="Mechanics"
    this.student3.firstname="Ioana"
    this.student3.lastname="Achimescu"
    this.student3.group=40314
    this.student3.university="UTCN"

    this.student4 = new Student()
    this.student4.country="Romania"
    this.student4.faculty="Architecture"
    this.student4.firstname="Maria"
    this.student4.lastname="Vadim"
    this.student4.group=40111
    this.student4.university="UTCN"

    this.student5 = new Student()
    this.student5.country="Romania"
    this.student5.faculty="Environmental Engineering"
    this.student5.firstname="Paul"
    this.student5.lastname="Tudose"
    this.student5.group=40235
    this.student5.university="UTCN"

    this.student6 = new Student()
    this.student6.country="Romania"
    this.student6.faculty="Medical Engineering"
    this.student6.firstname="Amalia"
    this.student6.lastname="Roata"
    this.student6.group=40735
    this.student6.university="UTCN"

    // this.students.push(this.student1);
    // this.students.push(this.student1);
    // this.students.push(this.student1);
  }

  ngOnInit() {
  }
  toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }
  public showTable(){
    this.students=[];
    if (this.levelNum==0)
    {
      this.students.push(this.student1)
      this.students.push(this.student2)
      this.students.push(this.student3)
      this.students.push(this.student4)
      this.students.push(this.student5)
      this.students.push(this.student6)
    }
    if (this.levelNum==1)
    {
      this.students.push(this.student3)
    }
    if (this.levelNum==2)
    {
      this.students.push(this.student4)
      this.students.push(this.student5)
    }
    if (this.levelNum==3)
    {
      this.students.push(this.student2)
    }
    if (this.levelNum==4)
    {
      this.students.push(this.student4)
    }
    
  }

}
