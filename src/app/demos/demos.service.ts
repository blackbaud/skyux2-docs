// #region imports
import {
  Injectable
} from '@angular/core';

import {
  SkyDateRangePickerDemoComponent
} from './date-range-picker/date-range-picker-demo.component';
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
      name: 'Date range picker',
      component: SkyDateRangePickerDemoComponent,
      files: [
        {
          name: 'date-range-picker-demo.component.html',
          fileContents: require('!!raw-loader!./date-range-picker/date-range-picker-demo.component.html')
        },
        {
          name: 'date-range-picker-demo.ts',
          fileContents: require('!!raw-loader!./date-range-picker/date-range-picker-demo.component.ts'),
          componentName: 'SkyDateRangePickerDemoComponent',
          bootstrapSelector: 'sky-date-range-picker-demo'
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
