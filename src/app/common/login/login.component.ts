import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly LOGIN_METHOD = LOGIN_METHOD;
  isLoggingIn: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.authService.signOut();
  }

  login(provider: string) {
    this.isLoggingIn = true;
    this.authService.signIn(provider).subscribe(
      userInfo => {
        history.back();
      },
      err => {
        this.isLoggingIn = false;
        this.snackBar.open( '登入失敗: ' + err , 'OK')
      }
    );
  }

}
export const LOGIN_METHOD = [ 'Google', 'Facebook', 'Github' ];
