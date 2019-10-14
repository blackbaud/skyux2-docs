import {
  SkyCellType
} from '@skyux/ag-grid';

import {
  ValueFormatterParams, ColDef
} from 'ag-grid-community';

export class SkyAutocompleteOption {
  public id: string;
  public name: string;
}

export const SKY_DEPARTMENTS = [
  {
    id: '1',
    name: 'Marketing'
  },
  {
    id: '2',
    name: 'Sales'
  },
  {
    id: '3',
    name: 'Engineering'
  },
  {
    id: '4',
    name: 'Customer Support'
  }
];

export const SKY_JOB_TITLES: {[name: string]: SkyAutocompleteOption[]} = {
  'Marketing': [
    {
      id: '1',
      name: 'Social Media Coordinator'
    },
    {
      id: '2',
      name: 'Blog Manager'
    },
    {
      id: '3',
      name: 'Events Manager'
    }
  ],
  'Sales': [
    {
      id: '4',
      name: 'Business Development Representative'
    },
    {
      id: '5',
      name: 'Account Executive'
    }
  ],
  'Engineering': [
    {
      id: '6',
      name: 'Software Engineer'
    },
    {
      id: '7',
      name: 'Senior Software Engineer'
    },
    {
      id: '8',
      name: 'Principal Software Engineer'
    },
    {
      id: '9',
      name: 'UX Designer'
    },
    {
      id: '10',
      name: 'Product Manager'
    }
  ],
  'Customer Support': [
    {
      id: '11',
      name: 'Customer Support Representative'
    },
    {
      id: '12',
      name: 'Account Manager'
    },
    {
      id: '13',
      name: 'Customer Support Specialist'
    }
  ]
};

export class SkyAgGridDemoRow {
  public selected: boolean;
  public name: string;
  public age: number;
  public startDate: Date;
  public endDate?: Date;
  public department: SkyAutocompleteOption;
  public jobTitle?: SkyAutocompleteOption;
}

export const SKY_AG_GRID_DEMO_DATA = [
  {
    selected: true,
    name: 'Billy Bob',
    age: 55,
    startDate: new Date('12/1/1994'),
    department: SKY_DEPARTMENTS[3],
    jobTitle: SKY_JOB_TITLES['Customer Support'][1]
  },
  {
    selected: false,
    name: 'Jane Deere',
    age: 33,
    startDate: new Date('7/15/2009'),
    department: SKY_DEPARTMENTS[2],
    jobTitle: SKY_JOB_TITLES['Engineering'][3]
  },
  {
    selected: false,
    name: 'John Doe',
    age: 38,
    startDate: new Date('9/1/2017'),
    endDate: new Date('9/30/2017'),
    department: SKY_DEPARTMENTS[1]
  }
];

export const SKY_AG_GRID_DEMO_EDIT_COLUMN_DEFS: ColDef[] = [
  {
    field: 'name',
    headerName: 'Name'
  },
  {
    field: 'age',
    headerName: 'Age',
    type: SkyCellType.Number,
    maxWidth: 60,
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
    editable: true
  },
  {
    field: 'department',
    headerName: 'Department',
    type: SkyCellType.Autocomplete,
    comparator: (value1, value2) => { return autocompleteSort(value1, value2); },
    editable: true,
    cellEditorParams: {
      skyComponentProperties: {
        data: SKY_DEPARTMENTS
      }
    },
    valueFormatter: (params: ValueFormatterParams) => params.value && params.value.name
  },
  {
    field: 'jobTitle',
    headerName: 'Title',
    type: SkyCellType.Autocomplete,
    comparator: (value1, value2) => { return autocompleteSort(value1, value2); },
    editable: true,
    cellEditorParams: (params: any): any => {
      const selectedDepartment: string = params.data && params.data.department && params.data.department.name;
      let editParams: any = { skyComponentProperties: { data: [] } };

      if (selectedDepartment) {
        editParams.skyComponentProperties.data = SKY_JOB_TITLES[selectedDepartment];
      }
      return editParams;
    },
    valueFormatter: (params: ValueFormatterParams) => params.value && params.value.name
  }
];

export const SKY_AG_GRID_DEMO_READ_COLUMN_DEFS = [
  {
    field: 'selected',
    headerName: '',
    maxWidth: 50,
    sortable: false,
    type: SkyCellType.RowSelector
  },
  ...SKY_AG_GRID_DEMO_EDIT_COLUMN_DEFS
];

function autocompleteSort(value1: SkyAutocompleteOption, value2: SkyAutocompleteOption): number {
  if (value1 && value2 && value1.name > value2.name) {
  return -1;
  } else if (value1 && value2 && value1.name < value2.name) {
    return 1;
  } else if (value1 && value2 && value1 === value2) {
    return 0;
  } else if (value1) {
    return 1;
  } else {
    return -1;
  }
}
