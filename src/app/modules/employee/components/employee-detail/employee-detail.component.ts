import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "@app/modules/employee/services/employee.service";
import { Subscription } from "rxjs";
import { EmployeeModel } from "@app/modules/employee/models/employee.model";
import Swal from "sweetalert2";
import * as moment from "moment";

@Component({
  selector   : 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls  : ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  employee: EmployeeModel;
  search = "";

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    const sbParams = this.activeRoute.params.subscribe(
      (param) => {
        const employee = this.employeeService.findOne(param.username);
        if (employee) {
          this.employee = employee;
        }
        this.cd.markForCheck();
      }
    );

    const sbQueryParams = this.activeRoute.queryParams.subscribe(
      (param) => {
        this.search = param.search;
        this.cd.markForCheck();
      }
    );

    this.subscriptions.push(sbParams);
    this.subscriptions.push(sbQueryParams);
  }

  formatSalary(salary: number): string {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(salary);
  }

  formatDate(date: string | Date) {
    return moment(date).format("DD MMMM YYYY HH:mm:ss");
  }

  onCancel() {
    this.router.navigate(["/employee/list"], { queryParams: { search: this.search } });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}
