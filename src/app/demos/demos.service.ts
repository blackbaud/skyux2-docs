// #region imports
import {
  Injectable
} from '@angular/core';

import {
  SkySummaryActionBarDemoComponent
} from './summary-action-bar';
// #endregion

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
      name: 'Summary action bar',
      component: SkySummaryActionBarDemoComponent,
      files: [
        {
          name: 'summary-action-bar-demo.component.html',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-demo.component.html')
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
          name: 'summary-action-bar-modal-demo.ts',
          fileContents: require('!!raw-loader!./summary-action-bar/summary-action-bar-modal-demo.component.ts'),
          componentName: 'SkySummaryActionBarModalDemoComponent'
        }
      ]
    }
  ];

  public getComponent(name: string): any {
    const found = this.components.find((component: any) => {
      return component.component.name === name;
    });

    return found;
  }
}
