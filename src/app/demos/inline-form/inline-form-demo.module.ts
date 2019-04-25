import {
  NgModule
} from '@angular/core';

import {
  SkyInlineFormModule
} from '@skyux/inline-form';

import {
  SkyInlineFormDemoComponent
} from './inline-form-demo.component';

@NgModule({
  imports: [
    SkyInlineFormModule
  ],
  exports: [
    SkyInlineFormModule
  ],
  entryComponents: [
    SkyInlineFormDemoComponent
  ]
})
export class SkyInlineFormDemoModule { }
