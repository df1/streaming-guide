import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['select','name'];
  dataSource = new MatTableDataSource(SAMPLE_DATA);
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

const SAMPLE_DATA = [
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
  {name:'Game of Thrones'},
];
