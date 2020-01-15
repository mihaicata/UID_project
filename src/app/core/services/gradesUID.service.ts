import { Injectable } from '@angular/core';
import {Grade} from '../models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradesUIDService {

  constructor() { }

  get assignmentsGrades(): Grade[] {
    const grades: Grade[] = [
      {
        activity: 'HTML and CSS',
        grade: 10,
        range: '0-10',
        percentage: 100
      },
      {
        activity: 'JavaScript',
        grade: 10,
        range: '0-10',
        percentage: 100
      },
      {
        activity: 'jQuery',
        grade: 9,
        range: '0-10',
        percentage: 90
      }
    ];

    return grades;
  }


  get quizzesGrades(): Grade[] {
    const grades: Grade[] = [
      {
        activity: 'HTML and CSS',
        grade: 10,
        range: '0-10',
        percentage: 100
      },
      {
        activity: 'JavaScript',
        grade: 10,
        range: '0-10',
        percentage: 100
      },
      {
        activity: 'jQuery',
        grade: 9,
        range: '0-10',
        percentage: 90
      }
    ];

    return grades;
  }

  get projectGrades(): Grade[] {
    const grades: Grade[] = [
      {
        activity: 'Phase1',
        grade: 10,
        range: '0-10',
        percentage: 100
      },
      {
        activity: 'Phase2',
        grade: 10,
        range: '0-10',
        percentage: 100
      },
      {
        activity: 'Phase3',
        grade: 1,
        range: '0-10',
        percentage: 100
      }
    ];

    return grades;
  }

  get examsGrades(): Grade[] {
    const grades: Grade[] = [
      {
        activity: 'Lab Test 1',
        grade: 10,
        range: '0-10',
        percentage: 100
      },
      {
        activity: 'Lab Test 2',
        grade: 10,
        range: '0-10',
        percentage: 100
      },
      {
        activity: 'Final Exam',
        grade: 0,
        range: '0-10',
        percentage: 0
      }
    ];

    return grades;
  }

}
