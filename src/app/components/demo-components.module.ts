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
  SkyPhoneFieldDemoModule,
  SkySummaryActionBarDemoModule
} from '../demos';

import {
  SkyDemoComponentsService
} from './demo-components.service';
require('style-loader!prismjs/themes/prism.css');

@NgModule({
  imports: [
    SkyDemoModule,
    SkyPhoneFieldDemoModule,
    SkySummaryActionBarDemoModule
  ],
  exports: [
    SkyDemoModule,
    SkyPhoneFieldDemoModule,
    SkySummaryActionBarDemoModule
  ],
  providers: [
    SkyDemoComponentsService,
    SkyDocsDemoCodeService
  ]
})
export class SkyDemoComponentsModule { }
