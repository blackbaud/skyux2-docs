import {
  NgModule
} from '@angular/core';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  SkyCharacterCounterModule
} from '@skyux/forms';

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SkyCharacterCounterModule
  ]
})
export class SkyCharacterCountDemoModule { }
