import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { map, flatMap, mergeAll, toArray, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService,
  ) { }

  getWatchlist(){
    return this.afs.collection<any>('watchlist', ref =>
      ref.where("ownerUID", "==", this.authService.getUserInfo().uid ))
      .get()
      .pipe(
        map( i => i.docs[0].data().items ),
        mergeAll(),
        map( (i:any) => this.afs.doc(i.path).get().pipe(map(i=> i.data()))),
        toArray()
      )
  }
}
