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

import {
  SkyInlineFormDemoModule
} from '../demos/inline-form/inline-form-demo.module';

require('style-loader!prismjs/themes/prism.css');

@NgModule({
  imports: [
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkySummaryActionBarDemoModule,
    SkyInlineFormDemoModule
  ],
  exports: [
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkySummaryActionBarDemoModule,
    SkyInlineFormDemoModule
  ],
  providers: [
    SkyDemoComponentsService,
    SkyDocsDemoCodeService
  ]
})
export class SkyDemoComponentsModule { }
