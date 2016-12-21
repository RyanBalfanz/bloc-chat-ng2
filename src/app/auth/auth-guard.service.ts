import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private loginUrl: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): Observable<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate([this.loginUrl]);
      return false;
    }
    return true;
  }

}
