import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from "@app/modules/employee/components/employee-list/employee-list.component";
import { EmployeeAddComponent } from "@app/modules/employee/components/employee-add/employee-add.component";
import { EmployeeDetailComponent } from "@app/modules/employee/components/employee-detail/employee-detail.component";

const routes: Routes = [
  {
    path     : "list",
    component: EmployeeListComponent
  },
  {
    path     : "add",
    component: EmployeeAddComponent
  },
  {
    path     : "detail/:username",
    component: EmployeeDetailComponent
  },
  {
    path      : '',
    redirectTo: 'list',
    pathMatch : 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
