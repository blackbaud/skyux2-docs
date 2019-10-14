import {
  NgModule
} from '@angular/core';

import {
  AgGridModule
} from 'ag-grid-angular';

import {
  SkyAgGridModule
} from '@skyux/ag-grid';

import {
  SkyToolbarModule
} from '@skyux/layout';

import {
  SkyAgGridEditModalComponent
} from './ag-grid-edit-modal.component';

@NgModule({
  exports: [
    AgGridModule,
    SkyAgGridModule,
    SkyToolbarModule
  ],
  entryComponents: [
    SkyAgGridEditModalComponent
  ]
})
export class SkyAgGridDemoModule { }
