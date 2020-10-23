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
  SkyDataEntryGridDemoModule,
  SkySummaryActionBarDemoModule
} from '../demos';

import {
  SkyDemoComponentsService
} from './demo-components.service';

require('style-loader!prismjs/themes/prism.css');

@NgModule({
  imports: [
    SkyAngularTreeViewDemoModule,
    SkyDataEntryGridDemoModule,
    SkyDateRangePickerModule,
    SkySummaryActionBarDemoModule
  ],
  exports: [
    SkyAngularTreeViewDemoModule,
    SkyDataEntryGridDemoModule,
    SkyDateRangePickerModule,
    SkySummaryActionBarDemoModule
  ],
  providers: [
    SkyDemoComponentsService,
    SkyDocsDemoCodeService
  ]
})
export class SkyDemoComponentsModule { }
