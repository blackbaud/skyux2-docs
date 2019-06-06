import {
  NgModule
} from '@angular/core';

import {
  StacheModule
} from'@blackbaud/skyux-lib-stache';

import {
  SkyDemoComponentsModule
} from './components/demo-components.module';

import {
  SkyInlineFormDemoTileComponent
} from './demos/inline-form/inline-form-demo-tile.component';

import {
  SkyDemoTitleService
} from './shared/title.service';

require('style-loader!./styles.scss');

import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  entryComponents: [
    SkyInlineFormDemoTileComponent
  ],
  imports: [
    SkyDemoComponentsModule,
    StacheModule
  ],
  exports: [
    AppSkyModule,
    SkyDemoComponentsModule,
    StacheModule
  ],
  providers: [
    SkyDemoTitleService
  ]
})
export class AppExtrasModule { }
