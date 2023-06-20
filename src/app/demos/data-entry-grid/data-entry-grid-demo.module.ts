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
  SkyDataEntryGridEditModalComponent
} from './data-entry-grid-edit-modal.component';

import {
  SkyDataEntryGridContextMenuComponent
} from './data-entry-grid-context-menu.component';

@NgModule({
  imports: [
    AgGridModule.withComponents([SkyDataEntryGridContextMenuComponent])
  ],
  exports: [
    AgGridModule,
    SkyAgGridModule,
    SkyToolbarModule
  ],
  entryComponents: [
    SkyDataEntryGridEditModalComponent
  ]
})
export class SkyDataEntryGridDemoModule { }
