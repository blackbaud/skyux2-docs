import {
  NgModule
} from '@angular/core';

import {
  AgGridModule
} from 'ag-grid-angular';

import {
  SkyAgGridModule
} from '@skyux/ag-grid';

@NgModule({
  imports: [
    SkyAgGridModule
  ],
  exports: [
    AgGridModule,
    SkyAgGridModule
  ]
})
export class SkyAgGridDemoModule { }
