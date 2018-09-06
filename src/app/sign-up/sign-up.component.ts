import { Component, OnInit } from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { AuthService }      from '../login/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { tap, delay } from 'rxjs/operators';
import {  of } from 'rxjs/observable/of';

import { Http, Headers, RequestOptions } from "@angular/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserService, private toastr: ToastrService, public router: Router) { }

  ngOnInit() {
   
  }
  registerForm(form?: NgForm) {
  this.user = {
  lastname: "",
  firstname: "",
  email: "",
  passwordc: "",
     }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
    .map(res => res)
          .subscribe((data: any) => {
        console.log('signup component onSubmit form.value', form.value)
        console.log('signup component onSubmit data', data)
        if (data.rowsAffected["0"] != 0) {
        
          this.toastr.success('User registration successful');
          this.router.navigate(['/login']);
        }
        else
    
        this.router.navigate(['/register']);
      });
  }

}


