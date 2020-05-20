import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input('entity') item: any;
  @Input() entityType: string;

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  watch(id: string, e: Event) {
    e.stopPropagation();
    window.open('https://www.netflix.com/title/81243996');
  }

  addToWatchList(id: string, e: Event) {
    e.stopPropagation();
    this.authService.performActionAfterLogin( (id: string) => {
      this.snackBar.open('Not yet implemented','OK', {
        duration: 1000
      });
    }, this, id);
  }

  stopRipple(e: Event) {
    e.stopPropagation();
  }
}
