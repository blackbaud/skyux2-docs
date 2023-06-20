import {
  Injectable
} from '@angular/core';

import {
  SkyAngularTreeComponentDemoComponent,
  SkyDataEntryGridDemoComponent,
  SkySummaryActionBarDemoComponent
} from '.';

/**
 * This service provides consumers with the raw file contents for each component demo.
 * The `componentName` and `bootstrapSelector` properties allow the consumer to dynamically
 * generate the demo when needed. For example:
 *
 * `import { componentName } from 'file location';
 * `template: '<bootstrap-selector></bootstrap-selector>'`
 *
 * Note: If the componentName is provided but the bootstrapSelector is omitted, it can be assumed that
 * the component is an entry component.
 */

@Injectable()
export class SkyDocsDemoCodeService {
  public components: any[] = [
    {
      name: 'Data entry grid',
      component: SkyDataEntryGridDemoComponent,
      files: [
        {
          name: 'data-entry-grid-demo.component.html',
          fileContents: require('!!raw-loader!./data-entry-grid/data-entry-grid-demo.component.html')
        },
        {
          name: 'data-entry-grid-demo.component.ts',
          fileContents: require('!!raw-loader!./data-entry-grid/data-entry-grid-demo.component.ts'),
          componentName: 'SkyDataEntryGridDemoComponent',
          bootstrapSelector: 'sky-data-entry-grid-demo'
        },
        {
          name: 'data-entry-grid-context-menu.component.html',
          fileContents: require('!!raw-loader!./data-entry-grid/data-entry-grid-context-menu.component.html')
        },
        {
          name: 'data-entry-grid-context-menu.component.ts',
          fileContents: require('!!raw-loader!./data-entry-grid/data-entry-grid-context-menu.component.ts'),
          componentName: 'SkyDataEntryGridContextMenuComponent'
        },
        {
          name: 'data-entry-grid-demo-data.ts',
          fileContents: require('!!raw-loader!./data-entry-grid/data-entry-grid-demo-data.ts')
        },
        {
          name: 'data-entry-grid-edit-modal-context.ts',
          fileContents: require('!!raw-loader!./data-entry-grid/data-entry-grid-edit-modal-context.ts')
        },
        {
          name: 'data-entry-grid-edit-modal.component.html',
          fileContents: require('!!raw-loader!./data-entry-grid/data-entry-grid-edit-modal.component.html')
        },
        {
          name: 'data-entry-grid-edit-modal.component.ts',
          fileContents: require('!!raw-loader!./data-entry-grid/data-entry-grid-edit-modal.component.ts'),
          componentName: 'SkyDataEntryGridEditModalComponent'
        }
      ]
    },
    {
      name: 'Summary action bar',
      component: SkySummaryActionBarDemoComponent,
      files: [
        {
          name: 'summary-action-bar-demo.component.html',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-demo.component.html')
        },
        {
          name: 'summary-action-bar-demo.component.scss',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-demo.component.scss')
        },
        {
          name: 'summary-action-bar-demo.ts',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-demo.component.ts'),
          componentName: 'SkySummaryActionBarDemoComponent',
          bootstrapSelector: 'sky-summary-action-bar-demo'
        },
        {
          name: 'summary-action-bar-modal-demo.component.html',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-modal-demo.component.html')
        },
        {
          name: 'summary-action-bar-modal-demo.component.scss',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-modal-demo.component.scss')
        },
        {
          name: 'summary-action-bar-modal-demo.component.ts',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-modal-demo.component.ts')
        },
        {
          name: 'summary-action-bar-modal-demo.ts',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-modal-demo.component.ts'),
          componentName: 'SkySummaryActionBarModalDemoComponent'
        }
      ]
    },

    {
      name: 'Summary action bar',
      component: SkySummaryActionBarDemoComponent,
      files: [
        {
          name: 'summary-action-bar-demo.component.html',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-demo.component.html')
        },
        {
          name: 'summary-action-bar-demo.component.scss',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-demo.component.scss')
        },
        {
          name: 'summary-action-bar-demo.ts',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-demo.component.ts'),
          componentName: 'SkySummaryActionBarDemoComponent',
          bootstrapSelector: 'sky-summary-action-bar-demo'
        },
        {
          name: 'summary-action-bar-modal-demo.component.html',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-modal-demo.component.html')
        },
        {
          name: 'summary-action-bar-modal-demo.component.scss',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-modal-demo.component.scss')
        },
        {
          name: 'summary-action-bar-modal-demo.component.ts',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-modal-demo.component.ts')
        },
        {
          name: 'summary-action-bar-modal-demo.ts',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-modal-demo.component.ts'),
          componentName: 'SkySummaryActionBarModalDemoComponent'
        }
      ]
    },

    {
      name: 'Angular tree component',
      component: SkyAngularTreeComponentDemoComponent,
      files: [
        {
          name: 'angular-tree-component-demo.component.html',
          fileContents: require('!!raw-loader!./angular-tree-component/angular-tree-component-demo.component.html')
        },
        {
          name: 'angular-tree-component-demo.component.ts',
          fileContents: require('!!raw-loader!./angular-tree-component/angular-tree-component-demo.component.ts'),
          componentName: 'SkyAngularTreeComponentDemoComponent',
          bootstrapSelector: 'sky-angular-tree-component-demo'
        }
      ]
    }
  ];

  public getComponent(name: string): any {
    const found = this.components.find((component: any) => {
      return component.name === name;
    });

    return found;
  }
}
