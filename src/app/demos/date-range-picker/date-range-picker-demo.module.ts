import {
  NgModule
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  CommonModule
} from '@angular/common';

import {
  SkyDateRangePickerModule
} from '@skyux/datetime';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SkyDateRangePickerModule
  ],
  exports: [
    SkyDateRangePickerModule
  ]
})
export class SkyDateRangePickerDemoModule { }
