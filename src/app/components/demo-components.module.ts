import {
  NgModule
} from '@angular/core';

import {
  SkyDemoModule
} from '@blackbaud/skyux/dist/demo';

import {
  SkyDateRangePickerModule
} from '@skyux/datetime';

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
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkySummaryActionBarDemoModule
  ],
  exports: [
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkySummaryActionBarDemoModule
  ],
  providers: [
    SkyDemoComponentsService,
    SkyDocsDemoCodeService
  ]
})
export class SkyDemoComponentsModule { }
