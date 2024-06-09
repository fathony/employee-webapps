import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { EmployeeModel } from "@app/modules/employee/models/employee.model";
import { GROUPS } from "@app/modules/employee/data/groups";

@Component({
  selector   : 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls  : ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  addEmployeeForm: FormGroup;
  statuses = [
    {
      code: "active",
      name: "Active"
    },
    {
      code: "inactive",
      name: "In-Active"
    },
  ];
  groups = GROUPS;

  maxDate = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addEmployeeForm = this.fb.group({
      username   : [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(255),
        ]),
      ],
      firstName  : [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      lastName   : [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      email      : [
        null,
        Validators.compose([
          Validators.required,
          Validators.email,
        ]),
      ],
      birthDate  : [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      basicSalary: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(1),
        ]),
      ],
      status     : [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      group      : [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
      description: [
        null,
        Validators.compose([
          Validators.required,
        ]),
      ],
    });
  }

  onSubmit() {
    const employeeDto: EmployeeModel = {
      username   : this.addEmployeeForm.controls["username"].value,
      firstName  : this.addEmployeeForm.controls["firstName"].value,
      lastName   : this.addEmployeeForm.controls["lastName"].value,
      birthDate  : this.addEmployeeForm.controls["birthDate"].value,
      email      : this.addEmployeeForm.controls["email"].value,
      basicSalary: this.addEmployeeForm.controls["basicSalary"].value,
      description: this.addEmployeeForm.controls["description"].value,
      status     : this.addEmployeeForm.controls["status"].value,
      group      : this.addEmployeeForm.controls["group"].value,
    }
    // console.log(employeeDto);


    Swal.fire({
      title            : "Add Employee Successfully",
      html             : "",
      icon             : 'success',
      timer            : undefined,
      timerProgressBar : true,
      showConfirmButton: false,
      showCloseButton  : true,
      heightAuto       : false,
      willClose        : () => {
        this.addEmployeeForm.reset();
      },
    });
  }

  onCancel() {
    Swal.fire({
      text             : "Are you sure you would like to cancel?",
      icon             : "warning",
      showCancelButton : true,
      buttonsStyling   : false,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText : "No, return",
      customClass      : {
        confirmButton: "btn btn-info",
        cancelButton : "btn btn-secondary"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl("/");
      }
    })
  }


}
