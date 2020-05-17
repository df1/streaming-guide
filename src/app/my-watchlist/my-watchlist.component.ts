import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { WatchlistService } from '../service/watchlist.service';
import { Observable } from 'rxjs';
import { DocumentData } from '@angular/fire/firestore/angular-fire-firestore';

@Component({
  selector: 'app-my-watchlist',
  templateUrl: './my-watchlist.component.html',
  styleUrls: ['./my-watchlist.component.scss']
})
export class MyWatchlistComponent implements OnInit {
  watchlist$: Observable<any>;

  constructor(
    private router: Router,
    private watchlistService: WatchlistService,
  ) { }

  ngOnInit(): void {
    this.watchlist$ = this.watchlistService.getWatchlist();
  }
}
