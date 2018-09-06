import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }           from './dashboard.component';


import { AuthGuard }                from '../login/auth-guard.service';


const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
//      { 
//         path: '',
//         canActivateChild: [AuthGuard],
//         children: [{ path: 'admin', component: AdminComponent }]
//    }
  ]
 }
];

@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
