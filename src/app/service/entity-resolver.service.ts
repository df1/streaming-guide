import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GENRE_MAP } from '../util/constants';

@Injectable({
  providedIn: 'root'
})
export class EntityResolverService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const entityInfo = this.router.getCurrentNavigation().extras.state;
    if(entityInfo) {
      return of(entityInfo);
    }
    return this.afs.collection<any>(route.routeConfig.data.type)
              .doc(route.params.id).get()
              .pipe(map(i => ({
                ...i.data(),
                genre_ids: i.data().genre_ids.map( genre => GENRE_MAP[genre])
              })));
  }

  constructor(
    private router: Router,
    private afs: AngularFirestore,
  ) {}
}
