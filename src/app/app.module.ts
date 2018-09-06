import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, NavigationStart, NavigationEnd, RouterModule } from '@angular/router';


import { AppRoutingModule }     from './app-routing.module';

import { UserService } from './shared/user.service';


import { CandyComponent } from './candy/candy.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

import { LoginRoutingModule } from './login/login-routing.module';
import { CartComponent } from './cart/cart.component';
import { DataTablesModule } from 'angular-datatables';




declare var NProgress: any;

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    CandyComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    CartComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    DataTablesModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    LoginRoutingModule,
    AppRoutingModule,
    
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
