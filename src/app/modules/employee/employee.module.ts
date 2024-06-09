import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { InputNumberModule } from "primeng/inputnumber";
import { DropdownModule } from "primeng/dropdown";


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDetailComponent
  ],
  imports     : [
    CommonModule,
    EmployeeRoutingModule,
    TableModule,
    InputTextModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule
  ]
})
export class EmployeeModule {
}
