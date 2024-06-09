import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeModel } from "@app/modules/employee/models/employee.model";
import { Table } from "primeng/table";
import { MessageService } from "primeng/api";
import { EmployeeService } from "@app/modules/employee/services/employee.service";
import { ActivatedRoute, Router } from "@angular/router";
import { menuReinitialization } from "@app/_metronic/kt/kt-helpers";
import { Subscription } from "rxjs";

@Component({
  selector   : 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls  : ['./employee-list.component.scss'],
  providers  : [MessageService]
})
export class EmployeeListComponent implements OnInit, AfterViewInit, OnDestroy {
  subscriptions: Subscription[] = [];
  @ViewChild(Table) dt: Table;
  employees: EmployeeModel[] = [];

  search: string = "";

  constructor(
    private messageService: MessageService,
    public employeeService: EmployeeService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.employees = this.employeeService.findAll();
  }

  ngAfterViewInit() {
    const sbQueryParams = this.activeRoute.queryParams.subscribe(
      (param) => {
        this.search = param.search;
        this.onFilter();

        this.cd.markForCheck();
      }
    );

    this.subscriptions.push(sbQueryParams);
  }

  onFilter() {
    const value = this.search.toLowerCase();
    const employeeFiltered = this.employees.filter(employee => {
      return (
        employee.lastName.toLowerCase().includes(value) &&
        employee.email.toLowerCase().includes(value)
      );
    });

    this.dt.value = employeeFiltered;
    menuReinitialization();

  }

  onUpdate(username: string) {
    this.messageService.add({ severity: 'warn', summary: 'Update', detail: `Update ${username} Success` });
  }

  onDelete(username: string) {
    this.messageService.add({ severity: 'error', summary: 'Delete', detail: `Delete ${username} Success` });
  }

  onDetail(username: string) {
    this.route.navigate([`/employee/detail/${username}`], { queryParams: { search: this.search } });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
