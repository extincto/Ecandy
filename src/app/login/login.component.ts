import { Component, OnInit } from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { AuthService }      from './auth.service';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { tap, delay } from 'rxjs/operators';
import {  of } from 'rxjs/observable/of';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string
  user: User;
  isLoggedIn = false;
  authentication_error = false;


  constructor(public authService: AuthService, public router: Router, private userService: UserService, private toastr: ToastrService) { }
  ngOnInit() {
    this.loginForm();
    this.isLoggedIn = this.userService.isLoggedIn();
  
  }
  loginForm(form?: NgForm) {

     this.user = {
      email: '',
      firstname: '',
      lastname: '',
      passwordc: ''
    }
  }
  login(form: NgForm){
  
 
    this.authService.login(form.value)
       .subscribe(data => {
        console.log('loginCOMPONENT data', data)
        console.log('loginCOMPONENT form.value', form.value)
        if(form.value.email = 'yannickjammes@gmail.com'){
          this.authService.isLoggedIn = true;
          this.router.navigate(['dashboard']); 
         }
         else if (data["0"].EMAIL = form.value.email) {
          console.log('loginCOMPONENT data[0].EMAIL', data["0"].EMAIL)
         
         this.authService.isLoggedIn = true;
         this.router.navigate(['profil']);     
        }
        else if(data["0"].EMAIL != form.value.email)
       {
        this.authService.isLoggedIn = false;
       
        }
  
      }) 
   }

  
logout() {
  this.authService.logout();

 }
}
