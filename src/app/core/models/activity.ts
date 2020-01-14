import {Grade} from './grade';
import {Activities} from '../enums/activities.enum';

export class Activity {
  id?: number;
  grade?: Grade;
  name?: Activities;
  fileUrl?: string;
}
