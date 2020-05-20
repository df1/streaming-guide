import { Component, OnInit, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaMatcher } from '@angular/cdk/layout';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter, debounce } from 'rxjs/operators';
import { SPONSOR_URL, SHORT_TITLE, TITLE, MENU_TREE, CATEGORY_LIST } from './util/constants';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('sidenav') sidenav: MatSidenav;
  readonly shortTitle = SHORT_TITLE;
  readonly title = TITLE;
  readonly menuTree = MENU_TREE;
  readonly toolbarMenu = CATEGORY_LIST;
  isLoading = false;
  isInMainPage: boolean;
  isScrolled = false;
  get userInfo() {
    return this.authService.getUserInfo();
  }

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private scrollDispatcher: ScrollDispatcher,
    private zone: NgZone,
    private authService: AuthService,
    ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.scrollDispatcher.scrolled(100).subscribe( () =>
      this.isInMainPage && this.zone.run(() => this.isScrolled = document.scrollingElement.scrollTop > 0));
  }

  ngOnInit() {
    // for Github Page's routing hack with 404.html
    let routePath = sessionStorage.getItem('routePath');
    if( routePath ) {
      sessionStorage.removeItem('routePath');
      this.router.navigate([routePath]);
    }

    // gdpr cookie policy
    if( document.cookie.search(/accept-cookie/i) === -1 ) {
      let snackBarRef = this.snackBar.open('本網站仍在測試中。本網站使用cookies以提昇您的使用體驗及統計。繼續使用本網站表示您同意我們使用cookies。',
      '同意', { horizontalPosition: 'right'});
      snackBarRef.afterDismissed().subscribe(() => {
        document.cookie = 'accept-cookie=true;';
      });
    }

    // when route changes
    this.router.events.pipe(filter( e => e instanceof NavigationStart ))
    .subscribe((e: NavigationStart) => {
      this.isLoading = true;
    });
    this.router.events.pipe(filter( e => e instanceof NavigationEnd ))
    .subscribe( (e: NavigationEnd) => {
      this.isLoading = false;

      // judge if it's in main page
      this.isInMainPage = e.url === '/' || e.url === '/index';
    });
  }
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  closeSidenav(): void {
    this.sidenav.close();
  }

  donate() {
    window.open(SPONSOR_URL);
  }
}
