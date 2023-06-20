import { Injectable } from '@angular/core';

import { SkyDemoComponent } from './demo-component';
import { SkyDocsDemoCodeService } from '../demos/demos.service';

@Injectable()
export class SkyDemoComponentsService {
  public constructor(
    private docsDemoService: SkyDocsDemoCodeService
  ) { }

  public getComponents(filter?: string): SkyDemoComponent[] {
    return [
      {
        name: 'Data entry grid',
        icon: 'table',
        summary: 'Data entry grids provide a spreadsheet-like user interface for entering large amounts of data.',
        url: '/components/data-entry-grid',
        imports: {
          '@skyux/ag-grid': [
            'SkyAgGridModule'
          ],
          '@skyux/datetime': [
            'SkyDatepickerModule'
          ],
          '@skyux/lookup': [
            'SkyAutocompleteModule',
            'SkySearchModule'
          ],
          '@skyux/modals': [
            'SkyModalModule'
          ],
          'ag-grid-angular': [
            'AgGridModule'
          ],
          '@skyux/layout': [
            'SkyToolbarModule'
          ]
        },
        dependencies: {
          'ag-grid-angular': '*',
          'ag-grid-community': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Data entry grid'),
        disableStackblitz: true
      },
      {
        name: 'Summary action bar',
        icon: 'sun-o',
        // tslint:disable-next-line
        summary: `The summary action bar provides a docked container for actions and summary information.`,
        url: '/components/summary-actionbar',
        imports: {
          '@skyux/action-bars': [
            'SkySummaryActionBarModule'
          ],
          '@skyux/indicators': [
            'SkyKeyInfoModule'
          ],
          '@skyux/modals': [
            'SkyModalModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Summary action bar'),
        disableStackblitz: true
      },
      {
        name: 'Tree view',
        icon: 'sitemap',
        summary: `The tree view module provides a hierarchical list view with multiple modes for selecting items in the list.`,
        url: '/components/tree-view',
        imports: {
          '@skyux/angular-tree-view': [
            'SkyAngularTreeViewModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Angular tree component'),
        disableStackblitz: true
      }
    ];
  }

  public getDemoFiles(componentName: string): any {
    const docsDemo = this.docsDemoService.getComponent(componentName);

    if (docsDemo) {
      return this.docsDemoService.getComponent(componentName).files;
    }
  }
}
