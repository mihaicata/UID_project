import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() firstColumnName;
  @Input() dataSource = [];
  displayedColumns: string[] = ['Activity', 'Grade', 'Range', 'Percentage'];

  constructor() { }

  ngOnInit() {

  }

}
