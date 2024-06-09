import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { RouterModule, Routes } from '@angular/router';
import { NgbDropdownModule, NgbProgressbarModule, NgbTooltipModule, } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationModule } from '@app/utils/i18n';
import { LayoutComponent } from './layout.component';
import { ExtrasModule } from '@app/_metronic/partials';
import { Routing } from '@app/modules/routing';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScriptsInitComponent } from './components/scripts-init/scripts-init.component';
import { PageTitleComponent } from './components/header/page-title/page-title.component';
import { ModalsModule, } from '../partials';
import { ThemeModeModule } from '../partials/layout/theme-mode-switcher/theme-mode.module';
import { NavbarComponent } from './components/header/navbar/navbar.component';

const routes: Routes = [
  {
    path     : '',
    component: LayoutComponent,
    children : Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    PageTitleComponent,
    NavbarComponent,
  ],
  imports     : [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationModule,
    InlineSVGModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    ExtrasModule,
    ModalsModule,
    NgbTooltipModule,
    TranslateModule,
    ThemeModeModule,
  ],
  exports     : [RouterModule],
})
export class LayoutModule {
}
