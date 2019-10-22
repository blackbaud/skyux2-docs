import {
  Component,
  OnInit
} from '@angular/core';

import {
  GridApi,
  GridReadyEvent,
  GridOptions,
  ValueFormatterParams
} from 'ag-grid-community';

import {
  SkyCellType,
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
  SKY_AG_GRID_DEMO_DATA
} from './ag-grid-demo-data';

@Component({
  selector: 'sky-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html'
})
export class SkyAgGridDemoComponent implements OnInit {
  public gridData = SKY_AG_GRID_DEMO_DATA;
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
      maxWidth: 60
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      type: SkyCellType.Date,
      sort: 'asc'
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      type: SkyCellType.Date,
      valueFormatter: this.endDateFormatter
    },
    {
      field: 'department',
      headerName: 'Department',
      type: SkyCellType.Autocomplete
    },
    {
      field: 'jobTitle',
      headerName: 'Title',
      type: SkyCellType.Autocomplete
    }
  ];

  public gridOptions: GridOptions;
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
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }

  public openModal(): void {
    const context = new SkyAgGridEditModalContext();
    context.gridData = this.gridData;

    const options = {
      providers: [{ provide: SkyAgGridEditModalContext, useValue: context }],
      ariaDescribedBy: 'docs-edit-grid-modal-content',
      size: 'large'
    };

    const modalInstance = this.modalService.open(SkyAgGridEditModalComponent, options);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      if (result.reason === 'cancel' || result.reason === 'close') {
        alert('Edits canceled!');
      } else {
        this.gridData = result.data;
        this.gridApi.refreshCells();
        alert('Saving data!');
      }
    });
  }

  public searchApplied(searchText: string) {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
  }

  private endDateFormatter(params: ValueFormatterParams) {
    const dateConfig = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return params.value ? params.value.toLocaleDateString('en-us', dateConfig) : 'N/A';
  }
}
