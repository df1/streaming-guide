import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolverService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.categoryService.getCategory(route.paramMap.get('category')).pipe(delay(1000))
  }

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
  ) { }
}
