import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userInfo: firebase.User = null;
  private actionBeforeLogin: any;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.user = angularFireAuth.authState;
    this.user.subscribe( user => {
      if (user) {
        this.userInfo = user;
      }
      else {
        this.userInfo = null;
      }
    });
  }

  signIn(providerName: string) {
    let provider = new auth[providerName + 'AuthProvider']();
    provider.addScope('profile');
    provider.addScope('email');
    provider.setCustomParameters({
      allow_signup: 'false'
    });
    let signIn$: Observable<auth.UserCredential>;
    if( location.hostname === 'localhost1' ){
      signIn$ = from(this.angularFireAuth.signInAnonymously());
    } else {
      signIn$ = from(this.angularFireAuth.signInWithPopup(provider));
    }
    signIn$.subscribe( result => {
      // call actionBeforeLogin if there is one
      if( result.user && this.actionBeforeLogin ) {
        this.actionBeforeLogin.method.apply(this.actionBeforeLogin.thisarg, this.actionBeforeLogin.args);
        this.actionBeforeLogin = undefined;
      }
    });
    return signIn$;
  }

  signOut() {
    return from(this.angularFireAuth.signOut());
  }

  isLoggedIn() {
    if (this.userInfo == null ) {
      return false;
    } else {
      return true;
    }
  }

  getUserInfo() {
    return this.userInfo;
  }

  performActionAfterLogin(method: (...args: any) => any, thisarg: any, ...args: any) {
    if(this.isLoggedIn()){
      method.apply(thisarg, args);
    } else {
      // temporarily save the action to actionBeforeLogin
      this.actionBeforeLogin = { method, thisarg, args };
      this.router.navigateByUrl('/login');
    }
  }
}

