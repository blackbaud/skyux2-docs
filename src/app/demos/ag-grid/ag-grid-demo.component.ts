import {
  Component,
  OnInit
} from '@angular/core';

import {
  ColumnApi,
  GridReadyEvent,
  GridOptions
} from 'ag-grid-community';

import {
  SkyAgGridService,
  SkyCellType
} from '@skyux/ag-grid';

import {
  DEMO_GRID_DATA
} from './ag-grid-demo-data';

@Component({
  selector: 'sky-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html'
})
export class SkyAgGridDemoComponent implements OnInit {
  public gridData = DEMO_GRID_DATA;
  public gridOptions: GridOptions;
  public columnApi: ColumnApi;
  public columnDefs = [
    {
      field: 'selected',
      headerName: '',
      maxWidth: 50,
      sortable: false,
      type: SkyCellType.RowSelector
    },
    {
      field: 'name',
      headerName: 'Name'
    },
    {
      field: 'age',
      headerName: 'Age',
      type: SkyCellType.Number,
      sort: 'asc'
    }
  ];

  constructor(private agGridService: SkyAgGridService) { }

  public ngOnInit(): void {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.columnApi = gridReadyEvent.columnApi;

    this.columnApi.autoSizeColumns(['name', 'age']);
  }
}
