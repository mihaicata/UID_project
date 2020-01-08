import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [1,2,3];

  constructor() { }

  ngOnInit() {
  }

}
