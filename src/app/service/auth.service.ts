import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public angularFireAuth: AngularFireAuth
  ) { }

  doGithubLogin() {
    let provider = new auth.GithubAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.setCustomParameters({
      'allow_signup': 'false'
    });
    return from(this.angularFireAuth.signInWithPopup(provider));
  }

  doGoogleLogin() {
    let provider = new auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    return from(this.angularFireAuth.signInWithPopup(provider));
  }

  doFacebookLogin() {
    let provider = new auth.FacebookAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    return from(this.angularFireAuth.signInWithPopup(provider));
  }
}
