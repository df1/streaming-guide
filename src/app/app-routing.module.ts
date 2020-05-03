import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { LoginComponent } from './common/login/login.component';
import { MyWatchlistComponent } from './my-watchlist/my-watchlist.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'index', component: MainPageComponent },
  { path: 'category/:category', component: CategoryPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my', component: MyWatchlistComponent, canActivate: [AuthGuardService] },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
