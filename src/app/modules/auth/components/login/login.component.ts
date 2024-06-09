import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "@app/modules/auth/services/auth.service";
import { Router } from "@angular/router";
import { LoginDto } from "@app/modules/auth/dtos/login.dto";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(255),
        ]),
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(255),
        ]),
      ],
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit() {
    const loginDto: LoginDto = {
      username: this.loginForm.controls["username"].value,
      password: this.loginForm.controls["password"].value,
    }

    const isValidLogin = await this.authService.login(loginDto);

    if (isValidLogin) {
      Swal.fire({
        title            : "Login Successfully",
        html             : "",
        icon             : 'success',
        timer            : 10,
        timerProgressBar : true,
        showConfirmButton: false,
        showCloseButton  : true,
        heightAuto       : false,
        willClose        : () => {
          this.router.navigateByUrl("/")
        },
      });
    } else {
      Swal.fire({
        title            : "Login Failed",
        html             : "Username password is incorrect",
        icon             : 'error',
        confirmButtonText: 'Close',
        heightAuto       : false,
      });
    }
  }

  ngOnDestroy() {
  }

}
