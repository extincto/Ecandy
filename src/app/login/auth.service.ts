import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, delay } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';
import { HttpClient } from '@angular/common/http';
import {  Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable()
export class AuthService {
   isLoggedIn =  false;
  constructor(private http: HttpClient){}
  readonly rootUrl = 'http://localhost:8080';
  
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(user : User){
    
    const body: User = {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      passwordc: user.passwordc
    }
    this.isLoggedIn = true;
    return this.http.post(this.rootUrl + '/api/login', body);
    
    }
     getUserDetails(email, passwordc){
     return this.http.post(this.rootUrl + '/api/login', email, passwordc);
    }
  
  logout(): void {
    this.isLoggedIn = false;
  }
}

