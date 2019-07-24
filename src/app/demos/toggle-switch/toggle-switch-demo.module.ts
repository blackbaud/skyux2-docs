import {
  CommonModule
} from '@angular/common';

import {
  NgModule
} from '@angular/core';

import {
  SkyToggleSwitchModule
} from '@skyux/forms';

import {
  SkyToggleSwitchDemoComponent
} from './toggle-switch-demo.component';

@NgModule({
  declarations: [
    SkyToggleSwitchDemoComponent
  ],
  imports: [
    CommonModule,
    SkyToggleSwitchModule
  ],
  exports: [
    SkyToggleSwitchDemoComponent
  ]
})
export class SkyToggleSwitchDemoModule { }
