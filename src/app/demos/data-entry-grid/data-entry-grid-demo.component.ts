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
  SkyDataEntryGridEditModalContext
} from './data-entry-grid-edit-modal-context';

import {
  SkyDataEntryGridEditModalComponent
} from './data-entry-grid-edit-modal.component';

import {
  SkyDataEntryGridContextMenuComponent
} from './data-entry-grid-context-menu.component';

import {
  SKY_AG_GRID_DEMO_DATA
} from './data-entry-grid-demo-data';

@Component({
  selector: 'sky-data-entry-grid-demo',
  templateUrl: './data-entry-grid-demo.component.html'
})
export class SkyDataEntryGridDemoComponent implements OnInit {
  public gridData = SKY_AG_GRID_DEMO_DATA;
  public columnDefs = [
    {
      field: 'selected',
      type: SkyCellType.RowSelector
    },
    {
      colId: 'context',
      headerName: '',
      maxWidth: 50,
      sortable: false,
      cellRendererFramework: SkyDataEntryGridContextMenuComponent
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
    },
    {
      colId: 'validationCurrency',
      field: 'validationCurrency',
      type: [SkyCellType.CurrencyValidator]
    },
    {
      colId: 'validationDate',
      field: 'validationDate',
      type: [SkyCellType.Date, SkyCellType.Validator],
      cellRendererParams: {
        skyComponentProperties: {
          validator: (value: Date) => !!value && value > new Date(1985, 9, 26),
          validatorMessage: 'Please enter a future date'
        }
      }
    }
  ];

  public gridApi: GridApi;
  public gridOptions: GridOptions;
  public searchText: string;
  public noRowsTemplate: string;

  constructor(
    private agGridService: SkyAgGridService,
    private modalService: SkyModalService
  ) {
    this.noRowsTemplate = `<div class="sky-deemphasized">No results found.</div>`;
  }

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
    const context = new SkyDataEntryGridEditModalContext();
    context.gridData = this.gridData;

    const options = {
      providers: [{ provide: SkyDataEntryGridEditModalContext, useValue: context }],
      ariaDescribedBy: 'docs-edit-grid-modal-content',
      size: 'large'
    };

    const modalInstance = this.modalService.open(SkyDataEntryGridEditModalComponent, options);

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

  public searchApplied(searchText: string): void {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
    if (this.gridApi) {
      this.gridApi.setQuickFilter(searchText);
      let displayedRowCount = this.gridApi.getDisplayedRowCount();
      if (displayedRowCount > 0) {
        this.gridApi.hideOverlay();
      } else {
        this.gridApi.showNoRowsOverlay();
      }
    }
  }

  private endDateFormatter(params: ValueFormatterParams): string {
    const dateConfig = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return params.value ? params.value.toLocaleDateString('en-us', dateConfig) : 'N/A';
  }
}
