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
  SkyCharacterCountDemoModule,
  SkyInlineFormDemoModule,
  SkyPhoneFieldDemoModule,
  SkySplitViewDemoModule,
  SkySummaryActionBarDemoModule,
  SkyToggleSwitchDemoModule
} from '../demos';

import {
  SkyDemoComponentsService
} from './demo-components.service';

require('style-loader!prismjs/themes/prism.css');

@NgModule({
  imports: [
    SkyCharacterCountDemoModule,
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkyInlineFormDemoModule,
    SkyPhoneFieldDemoModule,
    SkySplitViewDemoModule,
    SkySummaryActionBarDemoModule,
    SkyToggleSwitchDemoModule
  ],
  exports: [
    SkyCharacterCountDemoModule,
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkyInlineFormDemoModule,
    SkyPhoneFieldDemoModule,
    SkySplitViewDemoModule,
    SkySummaryActionBarDemoModule,
    SkyToggleSwitchDemoModule
  ],
  providers: [
    SkyDemoComponentsService,
    SkyDocsDemoCodeService
  ]
})
export class SkyDemoComponentsModule { }
