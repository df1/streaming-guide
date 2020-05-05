import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics'
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { MainPageComponent } from './main-page/main-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CarouselComponent } from './common/carousel/carousel.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CarouselItemDirective, CarouselItemElement } from './common/carousel/carousel-item.directive';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { MyWatchlistComponent } from './my-watchlist/my-watchlist.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { InfoBannerComponent } from './common/info-banner/info-banner.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
      pinch: { enable: false },
      rotate: { enable: false },
      swipe: { enable: false },
      // only allow horizontal pan
      pan: { direction: 6 }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    CategoryPageComponent,
    FooterComponent,
    LoginComponent,
    MyWatchlistComponent,
    InfoPageComponent,
    InfoBannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatRippleModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

