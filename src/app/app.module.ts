import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MainPageComponent } from './main-page/main-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CarouselItemDirective, CarouselItemElement } from './carousel/carousel-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    // ListDisplayComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    CategoryPageComponent
  ],
  imports: [
    // MatDatepickerModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatStepperModule,
    // MatTabsModule,
    // MatExpansionModule,
    // MatProgressSpinnerModule,
    // MatInputModule,
    // MatAutocompleteModule,
    // MatFormFieldModule,
    // MatGridListModule,
    // MatButtonToggleModule,
    // MatChipsModule,
    // MatProgressBarModule,
    // MatTableModule,
    // MatSortModule,
    // MatCheckboxModule,
    // MatPaginatorModule,
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
