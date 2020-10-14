import {
  NgModule
} from '@angular/core';

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

require('style-loader!prismjs/themes/prism.css');

@NgModule({
  imports: [
    SkyAngularTreeViewDemoModule,
    SkyCharacterCountDemoModule,
    SkyDataEntryGridDemoModule,
    SkyDateRangePickerModule,
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
    SkyInlineFormDemoModule,
    SkyPhoneFieldDemoModule,
    SkySingleFileAttachmentDemoModule,
    SkySplitViewDemoModule,
    SkySummaryActionBarDemoModule,
    SkyToggleSwitchDemoModule
  ],
  providers: [
    SkyDocsDemoCodeService
  ]
})
export class SkyDemoComponentsModule { }
