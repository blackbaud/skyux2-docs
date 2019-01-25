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
  SkyDateRangePickerDemoModule
} from '../demos/date-range-picker';

import {
  SkyDemoComponentsService
} from './demo-components.service';

require('style-loader!prismjs/themes/prism.css');

@NgModule({
  imports: [
    SkyDemoModule,
    SkyDateRangePickerDemoModule
  ],
  exports: [
    SkyDemoModule,
    SkyDateRangePickerDemoModule
  ],
  providers: [
    SkyDemoComponentsService,
    SkyDocsDemoCodeService
  ]
})
export class SkyDemoComponentsModule { }
