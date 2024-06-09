import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbRoutingModule } from "@app/utils/breadcrumb/breadcrumb-routing.module";


@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  exports     : [
    BreadcrumbComponent
  ],
  imports     : [
    CommonModule,
    BreadcrumbRoutingModule
  ]
})
export class BreadcrumbModule {
}
