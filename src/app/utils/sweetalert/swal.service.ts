import { Injectable } from '@angular/core';
// @ts-ignore
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class SwalService {

  constructor(
    private route: Router,
  ) {
  }

  showErrorApi(err: HttpErrorResponse) {
    let error: any;
    let errMessages: any;

    let hdr = '';
    let msg = '';

    if (err.status > 0) {
      if (err.status === 422) {
        hdr = err.error.name;

        if (err.error.data) {
          const keys = Object.keys(err.error.data);
          let errArr: any[] = [];

          if (keys.length > 0) {
            keys.forEach(key => {
              errArr.push(err.error.data[key]);
            });
            errMessages = errArr.join('<br/>');
            msg = errMessages;
          } else {
            msg = err.error.message;
          }
        } else {
          msg = err.error.message;
        }
      } else if (err.status === 404) {
        hdr = 'Failed Getting Data'
      } else if (err.status === 500 || err.status === 400) {
        if (err.error.name) {
          msg = err.error.message;
        } else {
          hdr = err.error.message;
        }
      } else {
        hdr = 'There Is an Error'
      }
    } else {
      hdr = "Server not response";
      msg = "please contact admin or try again letter";
    }

    // if (errMessages) {
    //   hdr = err.error.message;
    //   msg = errMessages;
    // }

    Swal.fire({
      title            : hdr,
      html             : msg,
      icon             : 'error',
      confirmButtonText: 'Close',
      heightAuto       : false,
    });
  }

  showError(hdr: any, message: any = "") {
    Swal.fire({
      title            : hdr,
      html             : message,
      icon             : 'error',
      confirmButtonText: 'Close',
      heightAuto       : false,
    });
  }

  showSuccess(msg: any, redirect: boolean = false, url?: string, timer: number = 0,) {
    Swal.fire({
      title            : msg,
      html             : "",
      icon             : 'success',
      timer            : (timer) ? timer : undefined,
      timerProgressBar : true,
      showConfirmButton: false,
      showCloseButton  : true,
      heightAuto       : false,
      willClose        : () => {
        if (redirect) {
          if (url) {
            this.route.navigateByUrl(url);
          } else {
            this.route.navigateByUrl('/');
          }
        }
      },
    });
  }
}
