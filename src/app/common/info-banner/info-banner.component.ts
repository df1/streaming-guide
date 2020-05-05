import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.scss']
})
export class InfoBannerComponent implements OnInit {
  @Input() entity: any;
  @Input() isLoading: boolean;
  @Input() limitOverviewLength: boolean = true;
  @Input() limitHeight: boolean = true;

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
