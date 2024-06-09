import {Component, HostBinding, Input, OnInit} from '@angular/core';
import * as moment from "moment";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

export type NotificationsTabsType =
  | 'kt_topbar_notifications_1'
  | 'kt_topbar_notifications_2'
  | 'kt_topbar_notifications_3';

@Component({
  selector   : 'app-notifications-inner',
  templateUrl: './notifications-inner.component.html',
})
export class NotificationsInnerComponent implements OnInit {
  @HostBinding('class') class =
                          'menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  @Input() inboxes: any[];

  activeTabId: NotificationsTabsType = 'kt_topbar_notifications_1';

  constructor(
    public modal: NgbModal,
  ) {
  }

  ngOnInit(): void {
  }

  setActiveTabId(tabId: NotificationsTabsType) {
    this.activeTabId = tabId;
  }

  tripHTML(html: string) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }

  formatDate(date: string) {
    return moment(date).locale('ID').format("DD MMM YYYY");
  }
}

