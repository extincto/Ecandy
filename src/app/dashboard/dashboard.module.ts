import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent }           from './dashboard.component';


import { DashboardRoutingModule }       from './dashboard-routing.module';


@NgModule({
  imports: [
    DataTablesModule,
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
