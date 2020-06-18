import {
  NgModule
} from '@angular/core';
import {
  StacheModule
} from'@blackbaud/skyux-lib-stache';
import {
  SkyRestrictedViewModule
} from '@blackbaud/skyux-lib-restricted-view';
import {
  SkyDemoComponentsModule
} from './components/demo-components.module';
import {
  SkyInlineFormDemoTileComponent
} from './demos/inline-form/inline-form-demo-tile.component';
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
    SkyDocsAnatomyModule,
    SkyDocsDemoPageModule,
    SkyDocsDesignGuidelinesModule,
    SkyRestrictedViewModule,
    StacheModule
  ],
  providers: [
    SkyDocsSupportalService,
    SkyDemoSidebarService,
    SkyDemoTitleService
  ]
})
export class AppExtrasModule { }
