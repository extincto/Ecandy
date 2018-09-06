import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CandyComponent } from './candy/candy.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { AuthGuard } from './login/auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard]},
  { path: 'candy', component: CandyComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profil',loadChildren: 'app/profil/profil.module#ProfilModule', canLoad: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,
    {
      enableTracing: true, // <-- debugging
      preloadingStrategy: SelectivePreloadingStrategy,
    }
  )
],
  exports: [ RouterModule ],
  providers: [CanDeactivateGuard, SelectivePreloadingStrategy ]
})
export class AppRoutingModule {}