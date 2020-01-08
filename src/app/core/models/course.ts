import {Review} from './review';

export class Course {
  title: string;
  mainProfessor: string;
  assistantProfessor: string;
  progress: number;
  image: string;
  reviews: Review[];
  lectures: string[];
}
