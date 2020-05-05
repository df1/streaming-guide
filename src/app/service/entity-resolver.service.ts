import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntityResolverService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const entityInfo = this.router.getCurrentNavigation().extras.state;
    if(entityInfo) {
      return from([entityInfo]).pipe(delay(500));
    }
    return from([{test:123}]).pipe(delay(1000));
  }

  constructor(
    private router: Router
  ) { }
}
