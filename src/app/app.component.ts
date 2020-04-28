import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('sidenav') sidenav: MatSidenav;
  readonly shortTitle = '楓林晚';
  readonly title = '楓林晚 - 追劇 電影 線上看';

  menuTree = [
    { name: '首頁', link:'/index', showInToolbar: false },
    { name: '電影', link:'/category/movies' },
    { name: '台劇', link:'/category/taiwan' },
    { name: '日劇', link:'/category/japan' },
    { name: '韓劇', link:'/category/korea' },
    { name: '美劇', link:'/category/usa' },
    { name: '陸劇', link:'/category/china' },
    { name: '動畫', link:'/category/anime' },
  ];
  toolbarMenu = this.menuTree.filter(i => i.showInToolbar !== false );
  isLoading = false;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private titleService: Title,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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
      let snackBarRef = this.snackBar.open('本網站使用cookies以提昇您的使用體驗及統計。繼續使用本網站表示您同意我們使用cookies。',
      '同意', { horizontalPosition: 'right'});
      snackBarRef.afterDismissed().subscribe(() => {
        document.cookie = 'accept-cookie=true;';
      });
    }

    // when route changes
    this.router.events
    .pipe(filter( e => e instanceof NavigationEnd ))
    .subscribe( (e:NavigationEnd) => {
      // scroll to top
      window.scrollTo(0, 0);

      // change title
      const match = this.menuTree.find( i => i.link === e.url);
      this.titleService.setTitle( match ? (match.name + ' - ' + this.shortTitle ) : this.title  );
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
}
