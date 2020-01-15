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
  SkyDataEntryGridDemoModule,
  SkyInlineFormDemoModule,
  SkyPhoneFieldDemoModule,
  SkySingleFileAttachmentDemoModule,
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
    SkyDataEntryGridDemoModule,
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkyInlineFormDemoModule,
    SkyPhoneFieldDemoModule,
    SkySingleFileAttachmentDemoModule,
    SkySplitViewDemoModule,
    SkySummaryActionBarDemoModule,
    SkyToggleSwitchDemoModule
  ],
  exports: [
    SkyAngularTreeViewDemoModule,
    SkyCharacterCountDemoModule,
    SkyDataEntryGridDemoModule,
    SkyDateRangePickerModule,
    SkyDemoModule,
    SkyInlineFormDemoModule,
    SkyPhoneFieldDemoModule,
    SkySingleFileAttachmentDemoModule,
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
