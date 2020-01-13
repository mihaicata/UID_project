import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-assignments-smart',
  templateUrl: './assignments-smart.component.html',
  styleUrls: ['./assignments-smart.component.css']
})
export class AssignmentsSmartComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onView(idStudent: number) {
    this.router.navigate([`students`, idStudent], {relativeTo: this.route} );
  }

}
