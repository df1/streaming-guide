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
    return from(this.angularFireAuth.signInWithPopup(provider));
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

  performActionAfterLogin(method: () => any, thisarg: any, ...args: any) {
    // method.apply(thisarg, args);
    // this.router.navigateByUrl('/login');
  }
}

