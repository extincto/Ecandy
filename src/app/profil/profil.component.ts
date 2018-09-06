import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable, Subject }           from 'rxjs';
import { map }                  from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { AuthService }      from '../login/auth.service';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { ToastrService } from 'ngx-toastr';

declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var swal: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private http: Http, private userService: UserService, private route: ActivatedRoute, private toastr: ToastrService, public router: Router) { }
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  products: Object;
  ngOnInit() { 
    this.dtOptions = {
      pagingType: 'numbers'
   
    };
         this.http.get('http://localhost:8080/api/products')
      .map((res => res.json()))
      .subscribe(products => {
        this.products = products;
       
        this.dtTrigger.next(); 
        console.log('DASHBOARD.COMPONENTS users', products);
                
    
    });
    
    $(function() {

    ///////////////////////////////////////////////////////////
    // TEXTAREA AJUSTABLE
    autosize($('.adjustable-textarea'));

    ///////////////////////////////////////////////////////////
    // CALENDAR
    $('.example-calendar-block').fullCalendar({
      //aspectRatio: 2,
      height: 450,
      header: {
        left: 'prev, next',
        center: 'title',
        right: 'month, agendaWeek, agendaDay'
      },
      buttonIcons: {
        prev: 'none fa fa-arrow-left',
        next: 'none fa fa-arrow-right',
        prevYear: 'none fa fa-arrow-left',
        nextYear: 'none fa fa-arrow-right'
      },
      Actionable: true,
      eventLimit: true, // allow "more" link when too many events
      viewRender: function(view, element) {
        if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
          $('.fc-scroller').jScrollPane({
            autoReinitialise: true,
            autoReinitialiseDelay: 100
          });
        }
      },
      eventClick: function(calEvent, jsEvent, view) {
        if (!$(this).hasClass('event-clicked')) {
          $('.fc-event').removeClass('event-clicked');
          $(this).addClass('event-clicked');
        }
      },
      defaultDate: '2016-05-12',
      events: [
        {
          title: 'All Day Event',
          start: '2016-05-01',
          className: 'fc-event-success'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-05-09T16:00:00',
          className: 'fc-event-default'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-05-16T16:00:00',
          className: 'fc-event-success'
        },
        {
          title: 'Conference',
          start: '2016-05-11',
          end: '2016-05-14',
          className: 'fc-event-danger'
        }
      ]
    });

    ///////////////////////////////////////////////////////////
    //  ALERTS
    $('.swal-btn-success').click(function(e){
      e.preventDefault();
      swal({
        title: "Following",
        text: "Now you are following Artour Scott",
        type: "success",
        confirmButtonClass: "btn-success",
        confirmButtonText: "Ok"
      });
    });

    $('.swal-btn-success-2').click(function(e){
      e.preventDefault();
      swal({
        title: "Friends request",
        text: "Friends request was succesfully sent to Artour Scott",
        type: "success",
        confirmButtonClass: "btn-success",
        confirmButtonText: "Ok"
      });
    });

  });

}

AddCandy(form: NgForm) {
  this.userService.AddCandy(form.value)
  .map(res => res)
        .subscribe((data: any) => {
      console.log('signup component onSubmit form.value', form.value)
      console.log('signup component onSubmit data', data)
      if (data.rowsAffected["0"] != 0) {
      
        this.toastr.success('Candy Added successfully');
        
      }
      else
  
      this.toastr.success('Candy could not be added!');
    });
}

}
