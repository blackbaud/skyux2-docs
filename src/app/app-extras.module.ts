import {
  NgModule
} from '@angular/core';

import {
  StacheModule
} from'@blackbaud/skyux-lib-stache';

import {
  SkyDocsAnatomyModule,
  SkyDocsSupportalService
} from '@skyux/docs-tools';

import {
  SkyDemoComponentsModule
} from './components/demo-components.module';

import {
  SkyDemoSidebarService
} from './shared/sidebar.service';

import {
  SkyDemoTitleService
} from './shared/title.service';

import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  exports: [
    AppSkyModule,
    SkyDemoComponentsModule,
    SkyDocsAnatomyModule,
    StacheModule
  ],
  providers: [
    SkyDocsSupportalService,
    SkyDemoSidebarService,
    SkyDemoTitleService
  ]
})
export class AppExtrasModule { }
