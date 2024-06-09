import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

@Component({
  selector   : 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls  : ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() appHeaderDefaulMenuDisplay: boolean;
  @Input() isRtl: boolean;


  itemClass: string = 'ms-1 ms-lg-3';
  btnClass: string =
    'btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative';
  userAvatarClass: string = 'symbol-35px symbol-md-40px';
  btnIconClass: string = 'svg-icon-1';

  private unsubscribe: Subscription[] = [];


  constructor(
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
  }
}
