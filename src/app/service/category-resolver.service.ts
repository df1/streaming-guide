import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolverService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if(this.router.getCurrentNavigation().previousNavigation) {
      // there was a previous route, load data before routing
      return this.categoryService.getCategory(route.paramMap.get('category'))
    } else {
      // the page is the first landing one, resolve directly to show the loading placeholder
      return of({isNeedLoad: true});
    }
  }

  constructor(
    private router: Router,
    private categoryService: CategoryService,
  ) { }
}
