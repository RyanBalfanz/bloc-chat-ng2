import { NgModule } from '@angular/core';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }
