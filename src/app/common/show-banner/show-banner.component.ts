import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-banner',
  templateUrl: './show-banner.component.html',
  styleUrls: ['./show-banner.component.scss']
})
export class ShowBannerComponent implements OnInit {
  @Input() show: any;
  @Input() isLoading: boolean;

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  watch() {
    window.open('https://www.netflix.com/title/81243996');
  }

  addToWatchList() {
    this.snackBar.open('Not yet implemented','OK', {
      duration: 1000
    });
  }
}
