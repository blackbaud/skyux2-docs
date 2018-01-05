import { NgModule } from '@angular/core';

import { SkyDemoModule } from '@blackbaud/skyux/dist/demo';

import { SkyDemoComponentsService } from './demo-components.service';

require('style-loader!prismjs/themes/prism.css');

@NgModule({
  imports: [
    SkyDemoModule
  ],
  exports: [
    SkyDemoModule
  ],
  providers: [
    SkyDemoComponentsService
  ]
})
export class SkyDemoComponentsModule { }
