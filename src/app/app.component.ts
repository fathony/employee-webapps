import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslationService } from './utils/i18n';
// language list
import { locale as enLang } from './utils/i18n/vocabs/en';
import { locale as idLang } from './utils/i18n/vocabs/id';
import { ThemeModeService } from './_metronic/partials/layout/theme-mode-switcher/theme-mode.service';

@Component({
  // tslint:disable-next-line:component-selector
  // eslint-disable-next-line @angular-eslint/component-selector
  selector       : 'body[root]',
  templateUrl    : './app.component.html',
  styleUrls      : ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(
    private translationService: TranslationService,
    private modeService: ThemeModeService,
  ) {
    // register translations
    this.translationService.loadTranslations(
      enLang,
      idLang,
    );
  }

  ngOnInit() {
    this.modeService.init();
  }
}
