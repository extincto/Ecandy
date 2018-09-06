import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService }          from './auth.service';

import { LoginComponent }       from './login.component';
import { UserService } from '../shared/user.service';
import { AuthGuard } from './auth-guard.service';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}