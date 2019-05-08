import {
  Injectable
} from '@angular/core';

import {
  SkyPhoneFieldDemoComponent,
  SkySummaryActionBarDemoComponent,
  SkyCodeBlockDemoComponent,
  SkyCopyToClipboardDemoComponent,
  SkyDateRangePickerDemoComponent,
  SkyInlineFormDemoComponent
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
      name: 'Phone field',
      component: SkyPhoneFieldDemoComponent,
      files: [
        {
          name: 'phone-field-demo.component.html',
          fileContents: require('!!raw-loader!./phone-field/phone-field-demo.component.html')
        },
        {
          name: 'phone-field-demo.ts',
          fileContents: require('!!raw-loader!./phone-field/phone-field-demo.component.ts'),
          componentName: 'SkyPhoneFieldDemoComponent',
          bootstrapSelector: 'sky-phone-field-demo'
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
    },

    {
      name: 'Code block',
      component: SkyCodeBlockDemoComponent,
      files: [
        {
          name: 'code-block-demo-component.html',
          fileContents: require('!!raw-loader!./code-block/code-block-demo.component.html')
        },
        {
          name: 'code-block-demo-component.ts',
          fileContents: require('!!raw-loader!./code-block/code-block-demo.component.ts'),
          componentName: 'SkyCodeBlockDemoComponent',
          bootstrapSelector: 'sky-code-block-demo'
        }
      ]
    },

    {
      name: 'Copy to clipboard',
      component: SkyCopyToClipboardDemoComponent,
      files: [
        {
          name: 'copy-to-clipboard-demo.component.html',
          fileContents: require('!!raw-loader!./copy-to-clipboard/copy-to-clipboard-demo.component.html')
        },
        {
          name: 'copy-to-clipboard-demo.component.ts',
          fileContents: require('!!raw-loader!./copy-to-clipboard/copy-to-clipboard-demo.component.ts'),
          componentName: 'SkyCopyToClipboardDemoComponent',
          bootstrapSelector: 'sky-copy-to-clipboard-demo'
        }
      ]
    },

    {
      name: 'Date range picker',
      component: SkyDateRangePickerDemoComponent,
      files: [
        {
          name: 'date-range-picker-demo.component.html',
          fileContents: require('!!raw-loader!./date-range-picker/date-range-picker-demo.component.html')
        },
        {
          name: 'date-range-picker-demo.component.ts',
          fileContents: require('!!raw-loader!./date-range-picker/date-range-picker-demo.component.ts'),
          componentName: 'SkyDateRangePickerDemoComponent',
          bootstrapSelector: 'sky-date-range-picker-demo'
        }
      ]
    },

    {
      name: 'Inline form',
      component: SkyInlineFormDemoComponent,
      files: [
        {
          name: 'inline-form-demo-component.html',
          fileContents: require('!!raw-loader!./inline-form/inline-form-demo.component.html')
        },
        {
          name: 'inline-form-demo-component.ts',
          fileContents: require('!!raw-loader!./inline-form/inline-form-demo.component.ts'),
          componentName: 'SkyInlineFormDemoComponent',
          bootstrapSelector: 'sky-inline-form-demo'
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
