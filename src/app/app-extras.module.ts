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
  SkyDemoSidebarService
} from './shared/sidebar.service';

import {
  SkyDemoTitleService
} from './shared/title.service';

require('style-loader!./styles.scss');

import {
  SkyDocsAnatomyModule,
  SkyDocsDemoPageModule,
  SkyDocsDesignGuidelinesModule,
  SkyDocsSupportalService
} from '@skyux/docs-tools';

import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  imports: [
    SkyDemoComponentsModule,
    StacheModule
  ],
  exports: [
    AppSkyModule,
    SkyDemoComponentsModule,
    SkyDocsAnatomyModule,
    SkyDocsDemoPageModule,
    SkyDocsDesignGuidelinesModule,
    StacheModule
  ],
  providers: [
    SkyDocsSupportalService,
    SkyDemoSidebarService,
    SkyDemoTitleService
  ]
})
export class AppExtrasModule { }
