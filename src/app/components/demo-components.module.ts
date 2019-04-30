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
    SkyDemoModule,
    SkySummaryActionBarDemoModule,
    SkyInlineFormDemoModule
  ],
  exports: [
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
