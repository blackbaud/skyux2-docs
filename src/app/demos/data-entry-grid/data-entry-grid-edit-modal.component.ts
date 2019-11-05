import {
  Component,
  OnInit
} from '@angular/core';

import {
  SkyAgGridService,
  SkyCellType
} from '@skyux/ag-grid';

import {
  SkyAutocompleteProperties,
  SkyDatepickerProperties
} from '@skyux/ag-grid/modules/ag-grid/types';

import {
  SkyAutocompleteSelectionChange
} from '@skyux/lookup';

import {
  SkyModalInstance
} from '@skyux/modals';

import {
  CellValueChangedEvent,
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ICellEditorParams,
  RowNode
} from 'ag-grid-community';

import {
  SkyAgGridDemoRow,
  SKY_DEPARTMENTS,
  SKY_JOB_TITLES
} from './data-entry-grid-demo-data';

import {
  SkyDataEntryGridEditModalContext
} from './data-entry-grid-edit-modal-context';

@Component({
  selector: 'sky-demo-edit-modal-form',
  templateUrl: './data-entry-grid-edit-modal.component.html'
})
export class SkyDataEntryGridEditModalComponent implements OnInit {
  public columnDefs: ColDef[];
  public gridApi: GridApi;
  public gridData: SkyAgGridDemoRow[];
  public gridOptions: GridOptions;

  constructor(
    private agGridService: SkyAgGridService,
    public context: SkyDataEntryGridEditModalContext,
    public instance: SkyModalInstance
  ) { }

  public ngOnInit(): void {
    this.gridData = this.context.gridData;
    this.columnDefs = [
      {
        field: 'name',
        headerName: 'Name'
      },
      {
        field: 'age',
        headerName: 'Age',
        type: SkyCellType.Number,
        maxWidth: 100,
        editable: true
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
        editable: true,
        cellEditorParams: (params: ICellEditorParams): { skyComponentProperties: SkyDatepickerProperties } => {
          return { skyComponentProperties: { minDate: params.data.startDate } };
        }
      },
      {
        field: 'department',
        headerName: 'Department',
        type: SkyCellType.Autocomplete,
        editable: true,
        cellEditorParams: (params: ICellEditorParams): { skyComponentProperties: SkyAutocompleteProperties } => {
          return {
            skyComponentProperties: {
              data: SKY_DEPARTMENTS,
              selectionChange: (change: SkyAutocompleteSelectionChange): void => { this.departmentSelectionChange(change, params.node); }
            }
          };
        },
        onCellValueChanged: (changeEvent: CellValueChangedEvent): void => {
          if (changeEvent.newValue !== changeEvent.oldValue) {
            this.clearJobTitle(changeEvent.node);
          }
        }
      },
      {
        field: 'jobTitle',
        headerName: 'Title',
        type: SkyCellType.Autocomplete,
        editable: true,
        cellEditorParams: (params: ICellEditorParams): { skyComponentProperties: SkyAutocompleteProperties } => {
          const selectedDepartment: string = params.data && params.data.department && params.data.department.name;
          let editParams: { skyComponentProperties: SkyAutocompleteProperties } = { skyComponentProperties: { data: [] } };

          if (selectedDepartment) {
            editParams.skyComponentProperties.data = SKY_JOB_TITLES[selectedDepartment];
          }
          return editParams;
        }
      }
    ];

    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getEditableGridOptions({ gridOptions: this.gridOptions });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }

  private departmentSelectionChange(change: SkyAutocompleteSelectionChange, node: RowNode): void {
    if (change.selectedItem && change.selectedItem !== node.data.department) {
      this.clearJobTitle(node);
    }
  }

  private clearJobTitle(node: RowNode): void {
    node.data.jobTitle = undefined;
    this.gridApi.refreshCells({rowNodes: [node]});
  }
}
