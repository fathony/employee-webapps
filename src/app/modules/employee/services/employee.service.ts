import { Injectable } from '@angular/core';
import { EMPLOYEES } from "@app/modules/employee/data/employees";
import { EmployeeModel } from "@app/modules/employee/models/employee.model";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: EmployeeModel[] = EMPLOYEES;

  constructor() {
  }

  findAll(): EmployeeModel[] {
    return this.employees;
  }

  findOne(username: string): EmployeeModel | undefined {
    return this.employees.find(employee => {
      return employee.username === username;
    })
  }
}
