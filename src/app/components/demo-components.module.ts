import {
  NgModule
} from '@angular/core';

import {
  SkyDemoModule
} from '@blackbaud/skyux2-demos/dist/demo';

import {
  SkyDateRangePickerModule
} from '@skyux/datetime';

import {
  SkyDocsDemoCodeService
} from '../demos/demos.service';

import {
  SkyPhoneFieldDemoModule,
  SkySummaryActionBarDemoModule,
  SkyInlineFormDemoModule
} from '../demos';

import {
  SkyDemoComponentsService
} from './demo-components.service';

require('style-loader!prismjs/themes/prism.css');

@NgModule({
  imports: [
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkyPhoneFieldDemoModule,
    SkySummaryActionBarDemoModule,
    SkyInlineFormDemoModule
  ],
  exports: [
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkyPhoneFieldDemoModule,
    SkySummaryActionBarDemoModule,
    SkyInlineFormDemoModule
  ],
  providers: [
    SkyDemoComponentsService,
    SkyDocsDemoCodeService
  ]
})
export class SkyDemoComponentsModule { }
