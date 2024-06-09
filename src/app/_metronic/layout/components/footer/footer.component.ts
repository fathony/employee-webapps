import {Component, Input} from '@angular/core';
import {environment} from "@env";
import {PageInfoService} from "@app/_metronic/layout";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    @Input() appFooterContainerCSSClass: string = '';

    currentDateStr: string = new Date().getFullYear().toString();
    appName = environment.appName;

    constructor() {
    }
}
