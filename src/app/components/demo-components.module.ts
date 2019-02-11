import {
  NgModule
} from '@angular/core';

import {
  SkyDemoModule
} from '@blackbaud/skyux/dist/demo';

import {
  SkyDocsDemoCodeService
} from '../demos/demos.service';

import {
  SkySummaryActionBarDemoModule
} from '../demos/summary-action-bar';

import {
  SkyDemoComponentsService
} from './demo-components.service';

require('style-loader!prismjs/themes/prism.css');

@NgModule({
  imports: [
    SkyDemoModule,
    SkySummaryActionBarDemoModule
  ],
  exports: [
    SkyDemoModule,
    SkySummaryActionBarDemoModule
  ],
  providers: [
    SkyDemoComponentsService,
    SkyDocsDemoCodeService
  ]
})
export class SkyDemoComponentsModule { }
