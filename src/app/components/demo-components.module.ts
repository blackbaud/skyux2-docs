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
  SkyAngularTreeViewDemoModule,
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
    SkyAngularTreeViewDemoModule,
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
    SkyAngularTreeViewDemoModule,
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
