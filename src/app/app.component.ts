import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '楓林晚';
  isLoading = false;

  displayedColumns: string[] = ['select','name'];
  dataSource = new MatTableDataSource(SAMPLE_DATA);
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.snackBar.open('We use cookies to improve your user experience and for statistics purposes. By continuing to use this website, you agree to our use of cookies.', 'I agree');
  }

  exportExcel() {
    /* table id is passed over here */
    let element = document.getElementById('main-data-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Exported Data');

    /* save to file */
    XLSX.writeFile(wb, `${this.title}-${new Date().toISOString().split('T')[0]}.xlsx` );
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

const SAMPLE_DATA = [{name:'Game of Thrones'}];
