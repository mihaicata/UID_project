import { Injectable } from '@angular/core';
import {Student} from '../../student';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {


 private assignmentsStudents$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>(null);
 private assignmentsStudents: Student[] = [];
  constructor() { }

  getStudentsForAssignments() {

    this.assignmentsStudents = [
      {
        id: 0,
        firstname: 'Paul',
        lastname: 'Helmer',
        group: 30441
      },
      {
        id: 1,
        firstname: 'Vlad',
        lastname: 'Petrutiu',
        group: 30444
      },
      {
        id: 2,
        firstname: 'Cata',
        lastname: 'Mihai',
        group: 30442
      },
      {
        id: 3,
        firstname: 'Andrei',
        lastname: 'Brasoveanu',
        group: 30442
      },
      {
        id: 4,
        firstname: 'Andreea',
        lastname: 'Daniel',
        group: 30443
      },
      {
        id: 5,
        firstname: 'Alexandra',
        lastname: 'Moldovan',
        group: 30443
      },
      {
        id: 6,
        firstname: 'Diana',
        lastname: 'Lazea',
        group: 30443
      },
      {
        id: 7,
        firstname: 'Vlad',
        lastname: 'Buda',
        group: 30443
      },
      {
        id: 8,
        firstname: 'Cristian',
        lastname: 'Blaga',
        group: 30443
      },
      {
        id: 9,
        firstname: 'Darius',
        lastname: 'Bogdan',
        group: 30443
      },
      {
        id: 10,
        firstname: 'Andreea',
        lastname: 'Ghejan',
        group: 30444
      }

    ];
    this.assignmentsStudents$.next(this.assignmentsStudents);

  }

  get assignmentsStudentsValue(): Student[] {
    return this.assignmentsStudents$.value;

  }
}
