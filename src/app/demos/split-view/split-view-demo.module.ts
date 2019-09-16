import {
  NgModule
} from '@angular/core';

import {
  SkySplitViewModule
} from '@skyux/split-view';

@NgModule({
  imports: [
    SkySplitViewModule
  ],
  exports: [
    SkySplitViewModule
  ]
})
export class SkySplitViewDemoModule { }
