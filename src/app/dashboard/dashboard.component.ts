import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable, Subject }           from 'rxjs';
import { map }                  from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { UserService } from '../shared/user.service';
import { AuthService } from '../login/auth.service';
import { User } from '../shared/user.model';


declare var $: any;
declare var jQuery: any;
declare var Chartist: any;
declare var coin: any; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  message = 'loadin ...';
  dtOptions: DataTables.Settings = {};
  users: Object;
  products: Object;
  dtTrigger: Subject<any> = new Subject();
  loaded = false;


  constructor(private authService: AuthService, private http: Http, private userService: UserService, private route: ActivatedRoute)
   {
    
   }
  
  //  <!-- ADDRESS BIRTH_DATE COUNTRY FIRST_NAME ID LAST_NAME PHONE USERNAME WALLET ZIP_CODE -->
  // users: Array<User>;
  ngOnInit(){
 // GET ADMIN DATA TODO


    //DATATABLES CLIENTS
    this.dtOptions = {
      pagingType: 'numbers'
   
    };
    
    this.http.get('http://localhost:8080/api/listeUsers')
    .map((res => res.json()))
    .subscribe(users => {
      this.users = users;
     
     
      console.log('DASHBOARD.COMPONENTS users', users);
    });
      this.http.get('http://localhost:8080/api/products')
      .map((res => res.json()))
      .subscribe(products => {
        this.products = products;
       
        this.dtTrigger.next(); 
        console.log('DASHBOARD.COMPONENTS users', products);
                
    
    });
      // session ID if available
      this.sessionId = this.route
      .queryParamMap
      .pipe(map(params => params.get('session_id') || 'None'));

    // frag
    this.token = this.route
      .fragment
      .pipe(map(fragment => fragment || 'None'));
    

    $(function () {
        // AREA
      var chart1 = new Chartist.Line(".chart-area-1", {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [
          [2, 4, 7, 25, 5, 28, 31]
        ]
      }, {
        fullWidth: !0,
        chartPadding: {
          right: 15,
          left: -15
        },
        low: 0,
        showArea: true,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });

      var chart2 = new Chartist.Line(".chart-area-2", {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [
          [3, 10, 65, 23, 81, 17, 3]
        ]
      }, {
        fullWidth: !0,
        chartPadding: {
          right: 15,
          left: -15
        },
        low: 0,
        showArea: true,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });

      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        chart1.update();
        chart2.update();
      });

    })
  }


}
