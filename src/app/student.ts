import {Grade} from './core/models/grade';

export class Student {
    id?: number;
    group?: number;
	  firstname?: string;
	  lastname?: string;
    faculty?: string;
    university?: string;
    country?: string;
    grade?: Grade;
    //assignments: Assignment[];
    //quizzes: Quizz[];
    //projects: Project[];
    //exams: Exam[]
}
