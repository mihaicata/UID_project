import { Injectable } from '@angular/core';
import {Student} from '../../student';
import {BehaviorSubject} from 'rxjs';
import {ActivityStudent} from '../models/activity-student';
import {Activities} from '../enums/activities.enum';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {


 private assignmentsStudents$: BehaviorSubject<ActivityStudent[]> = new BehaviorSubject<ActivityStudent[]>(null);
  constructor() { }

  getStudentsForAssignments() {

    const assignmentsStudents: ActivityStudent[] = [
      {
        student: {
          id: 0,
          firstname: 'Paul',
          lastname: 'Helmer',
          group: 30441
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }

      },
      {
        student: {
          id: 1,
          firstname: 'Vlad',
          lastname: 'Petrutiu',
          group: 30444
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
        },
      {
        student: {
          id: 2,
          firstname: 'Cata',
          lastname: 'Mihai',
          group: 30442
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
      },
      {
        student: {
          id: 3,
          firstname: 'Andrei',
          lastname: 'Brasoveanu',
          group: 30442
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
      },
      {
        student: {
          id: 4,
          firstname: 'Andreea',
          lastname: 'Daniel',
          group: 30443
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
      },
      {
        student: {
          id: 5,
          firstname: 'Alexandra',
          lastname: 'Moldovan',
          group: 30443
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
      },
      {
        student: {
          id: 6,
          firstname: 'Diana',
          lastname: 'Lazea',
          group: 30443
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
      },
      {
        student: {
          id: 7,
          firstname: 'Vlad',
          lastname: 'Buda',
          group: 30443
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
      },
      {
        student: {
          id: 8,
          firstname: 'Cristian',
          lastname: 'Blaga',
          group: 30443
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
      },
      {
        student: {
          id: 9,
          firstname: 'Darius',
          lastname: 'Bogdan',
          group: 30443
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
      },
      {
        student: {
          id: 10,
          firstname: 'Andreea',
          lastname: 'Ghejan',
          group: 30444
        },
        activity: {
          name: Activities.ASSIGNMENT,
          fileUrl: 'C:\\Users\\Ale\\Desktop\\UID_PROJECT\\UID_project\\src\\assets'
        }
      }

    ];
    this.assignmentsStudents$.next(assignmentsStudents);

  }

  get assignmentsStudentsValue(): ActivityStudent[] {
    return this.assignmentsStudents$.value;

  }
}
