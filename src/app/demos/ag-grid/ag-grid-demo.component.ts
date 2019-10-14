import {
  Component,
  OnInit
} from '@angular/core';

import {
  ColumnApi,
  GridApi,
  GridReadyEvent,
  GridOptions
} from 'ag-grid-community';

import {
  SkyAgGridService
} from '@skyux/ag-grid';

import {
  SkyModalService,
  SkyModalCloseArgs
} from '@skyux/modals';

import {
  SkyAgGridEditModalContext
} from './ag-grid-edit-modal-context';

import {
  SkyAgGridEditModalComponent
} from './ag-grid-edit-modal.component';

import {
  SKY_AG_GRID_DEMO_DATA,
  SKY_AG_GRID_DEMO_READ_COLUMN_DEFS
} from './ag-grid-demo-data';

@Component({
  selector: 'sky-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html'
})
export class SkyAgGridDemoComponent implements OnInit {
  public gridData = SKY_AG_GRID_DEMO_DATA;
  public columnDefs = SKY_AG_GRID_DEMO_READ_COLUMN_DEFS;
  public gridOptions: GridOptions;
  public columnApi: ColumnApi;
  public gridApi: GridApi;
  public searchText: string;

  constructor(
    private agGridService: SkyAgGridService,
    private modalService: SkyModalService
  ) { }

  public ngOnInit(): void {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.columnApi = gridReadyEvent.columnApi;
    this.gridApi = gridReadyEvent.api;

    this.columnApi.autoSizeColumns(['name', 'age']);
  }

  public openModal(): void {
    const context = new SkyAgGridEditModalContext();
    context.gridData = this.gridData;

    const options: any = {
      providers: [{ provide: SkyAgGridEditModalContext, useValue: context }],
      ariaDescribedBy: 'docs-edit-grid-modal-content',
      size: 'large'
    };

    const modalInstance = this.modalService.open(SkyAgGridEditModalComponent, options);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      if (result.reason === 'cancel') {
        alert('Edits canceled!');
      } else {
        alert('Saving data!');
        console.log(result.data);
      }
    });
  }

  public searchApplied(searchText: string) {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
  }
}
