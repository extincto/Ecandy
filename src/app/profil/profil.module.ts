import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DataTablesModule } from 'angular-datatables';
import { ProfilComponent }           from './profil.component';


import { ProfilRoutingModule }       from './profil-routing.module';


@NgModule({
  imports: [
    DataTablesModule,
    CommonModule,
    ProfilRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  declarations: [
    ProfilComponent
  ]
})
export class ProfilModule {}