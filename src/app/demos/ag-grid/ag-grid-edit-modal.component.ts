import {
  Component,
  OnInit
} from '@angular/core';

import {
  SkyAgGridService
} from '@skyux/ag-grid';

import {
  SkyModalInstance
} from '@skyux/modals';

import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent
} from 'ag-grid-community';

import {
  SkyAgGridDemoRow,
  SKY_AG_GRID_DEMO_EDIT_COLUMN_DEFS
} from './ag-grid-demo-data';

import {
  SkyAgGridEditModalContext
} from './ag-grid-edit-modal-context';

@Component({
  selector: 'sky-demo-modal-form',
  templateUrl: './ag-grid-edit-modal.component.html'
})
export class SkyAgGridEditModalComponent implements OnInit {
  public gridData: SkyAgGridDemoRow[];
  public columnDefs: ColDef[];
  public gridOptions: GridOptions;
  public gridApi: GridApi;

  constructor(
    private agGridService: SkyAgGridService,
    public context: SkyAgGridEditModalContext,
    public instance: SkyModalInstance
  ) { }

  public ngOnInit(): void {
    this.gridData = this.context.gridData;
    this.columnDefs = SKY_AG_GRID_DEMO_EDIT_COLUMN_DEFS;
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent) {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }
}
