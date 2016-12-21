import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {
  private auth = null;
  private loginURL = '';
  private logoutURL = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private angularFire: AngularFire
  ) {
    this.angularFire.auth.subscribe(auth => {
      if (auth) {
        console.log(`Authenticated User: ${auth.uid}`);
        console.dir(auth);
      }
      this.auth = auth;
    });
  }

  isAuthenticated(): boolean {
    return this.auth !== null;
  }

  login(): void {
    console.log('Logging in…');
    this.angularFire.auth.login();
    this.router.navigate([this.loginURL]);
  }

  logout(): void {
    console.log('Logging out…');
    this.angularFire.auth.logout();
    this.router.navigate([this.logoutURL]);
  }

  getAuth(): Observable<any> {
    return this.auth;
  }

  getUserId(): Observable<string> {
    return this.auth.uid;
  }

}
