import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './user.model';
import { Candy } from './candy.model';
import { NgForm } from '@angular/forms';



@Injectable()
export class UserService {
  private loggedIn = false;
  readonly rootUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  


  registerUser(user : User){
    const body: User = {
     
      passwordc: user.passwordc,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname
    }
    return this.http.post(this.rootUrl + '/api/register', body);
  }

  AddCandy(candy : Candy){
    const body: Candy = {
      name: candy.name, 
      quantity: candy.quantity,
      weightc: candy.weightc, 
      price: candy.price, 
      descriptionc: candy.descriptionc, 
      categoryid: candy.categoryid, 
      urlimg: candy.urlimg,
      sellerid: candy.sellerid,
      solddate: candy.solddate
    }
    return this.http.post(this.rootUrl + '/api/addCandy', body);
  }

  getUsersInfo(): Observable<User[]> {
 
   return this.http.get<User[]>('http://localhost:8080/api/listeUsers')
}
getUsersId(id): Observable<User[]> {
 
  return this.http.get<User[]>('http://localhost:8080/api/user/:id')
}

  isLoggedIn() {
    return this.loggedIn;
  }
}
