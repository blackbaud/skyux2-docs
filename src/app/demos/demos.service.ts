import {
  Injectable
} from '@angular/core';

import {
  SkyAngularTreeComponentDemoComponent,
  SkyCharacterCountDemoComponent,
  SkyCodeBlockDemoComponent,
  SkyCodeDemoComponent,
  SkyCopyToClipboardDemoComponent,
  SkyDataEntryGridDemoComponent,
  SkyDateRangePickerDemoComponent,
  SkyInlineFormDemoComponent,
  SkyPhoneFieldDemoComponent,
  SkySingleFileAttachmentDemoComponent,
  SkySplitViewDemoComponent,
  SkySummaryActionBarDemoComponent,
  SkyToggleSwitchDemoComponent
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
      name: 'Character count',
      component: SkyCharacterCountDemoComponent,
      files: [
        {
          name: 'character-count-demo.component.html',
          fileContents: require('!!raw-loader!./character-count/character-count-demo.component.html')
        },
        {
          name: 'character-count-demo.component.ts',
          fileContents: require('!!raw-loader!./character-count/character-count-demo.component.ts'),
          componentName: 'SkyCharacterCountDemoComponent',
          bootstrapSelector: 'sky-character-count-demo'
        }
      ]
    },
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
      name: 'Code',
      component: SkyCodeDemoComponent,
      files: [
        {
          name: 'code-demo.component.html',
          fileContents: require('!!raw-loader!./code/code-demo.component.html')
        },
        {
          name: 'code-demo.component.ts',
          fileContents: require('!!raw-loader!./code/code-demo.component.ts'),
          componentName: 'SkyCodeDemoComponent',
          bootstrapSelector: 'sky-code-demo'
        }
      ]
    },

    {
      name: 'Code block',
      component: SkyCodeBlockDemoComponent,
      files: [
        {
          name: 'code-block-demo.component.html',
          fileContents: require('!!raw-loader!./code-block/code-block-demo.component.html')
        },
        {
          name: 'code-block-demo.component.scss',
          fileContents: require('!!raw-loader!./code-block/code-block-demo.component.scss')
        },
        {
          name: 'code-block-demo.component.ts',
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
          name: 'inline-form-demo.component.html',
          fileContents: require('!!raw-loader!./inline-form/inline-form-demo.component.html')
        },
        {
          name: 'inline-form-demo.component.ts',
          fileContents: require('!!raw-loader!./inline-form/inline-form-demo.component.ts'),
          componentName: 'SkyInlineFormDemoComponent',
          bootstrapSelector: 'sky-inline-form-demo'
        },
        {
          name: 'inline-form-demo.component.scss',
          fileContents: require('!!raw-loader!./inline-form/inline-form-demo.component.scss')
        },
        {
          name: 'inline-form-demo-tile.component.html',
          fileContents: require('!!raw-loader!./inline-form/inline-form-demo-tile.component.html')
        },
        {
          name: 'inline-form-demo-tile.component.ts',
          fileContents: require('!!raw-loader!./inline-form/inline-form-demo-tile.component.ts'),
          componentName: 'SkyInlineFormDemoTileComponent'
        }
      ]
    },

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
      name: 'Single file attachment',
      component: SkySingleFileAttachmentDemoComponent,
      files: [
        {
          name: 'single-file-attachment-demo.component.html',
          fileContents: require('!!raw-loader!./single-file-attachment/single-file-attachment-demo.component.html')
        },
        {
          name: 'single-file-attachment-demo.component.ts',
          fileContents: require('!!raw-loader!./single-file-attachment/single-file-attachment-demo.component.ts'),
          componentName: 'SkySingleFileAttachmentDemoComponent',
          bootstrapSelector: 'sky-single-file-attachment-demo'
        }
      ]
    },

    {
      name: 'Split view',
      component: SkySplitViewDemoComponent,
      files: [
        {
          name: 'split-view-demo-component.html',
          fileContents: require('!!raw-loader!./split-view/split-view-demo.component.html')
        },
        {
          name: 'split-view-demo-component.ts',
          fileContents: require('!!raw-loader!./split-view/split-view-demo.component.ts'),
          componentName: 'SkySplitViewDemoComponent',
          bootstrapSelector: 'sky-split-view-demo'
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
      name: 'Toggle switch',
      component: SkyToggleSwitchDemoComponent,
      files: [
        {
          name: 'toggle-switch-demo.component.html',
          fileContents: require('!!raw-loader!./toggle-switch/toggle-switch-demo.component.html')
        },
        {
          name: 'toggle-switch-demo.component.ts',
          fileContents: require('!!raw-loader!./toggle-switch/toggle-switch-demo.component.ts'),
          componentName: 'SkyToggleSwitchDemoComponent',
          bootstrapSelector: 'sky-toggle-switch-demo'
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
