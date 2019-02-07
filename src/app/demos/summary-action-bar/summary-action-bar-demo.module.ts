import {
  NgModule
} from '@angular/core';

import {
  SkySummaryActionBarModule
} from '@skyux/action-bars';

import {
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  SkySummaryActionBarModalDemoComponent
} from './summary-action-bar-modal-demo.component';

@NgModule({
  imports: [
    SkyKeyInfoModule,
    SkyModalModule,
    SkySummaryActionBarModule
  ],
  exports: [
    SkyKeyInfoModule,
    SkyModalModule,
    SkySummaryActionBarModule
  ],
  providers: [],
  entryComponents: [
    SkySummaryActionBarModalDemoComponent
  ]
})
export class SkySummaryActionBarDemoModule { }
