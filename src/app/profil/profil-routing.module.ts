import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilComponent }           from './profil.component';
import { AuthGuard }                from '../login/auth-guard.service';


const ProfilRoutes: Routes = [
  {
    path: '',
    component: ProfilComponent,
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
    RouterModule.forChild(ProfilRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfilRoutingModule {}