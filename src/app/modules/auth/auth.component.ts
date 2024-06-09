import {Component, OnInit} from '@angular/core';

@Component({
  selector   : 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls  : ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // BODY_CLASSES.forEach((c) => document.body.classList.add(c));
  }

}
