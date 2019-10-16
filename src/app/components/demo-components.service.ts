import { Injectable } from '@angular/core';

import { SkyDemoService } from '@blackbaud/skyux2-demos/dist/demo';

import { SkyDemoComponent } from './demo-component';
import { SkyDocsDemoCodeService } from '../demos/demos.service';

@Injectable()
export class SkyDemoComponentsService {
  public constructor(
    private skyDemoService: SkyDemoService,
    private docsDemoService: SkyDocsDemoCodeService
  ) { }

  public getComponents(filter?: string): SkyDemoComponent[] {
    const listDependencies = {
      '@skyux/list-builder-common': '*',
      'microedge-rxstate': '*',
      '@skyux/lists': '*',
      '@skyux/lookup': '*',
      '@skyux/inline-form': '*',
      '@skyux/list-builder-view-checklist': '*',
      '@skyux/grids': '*'
    };

    return [
      {
        name: 'Action button',
        icon: 'square-o',
        // tslint:disable-next-line
        summary:
        `The action button module creates a large button with an icon, heading, and details.`,
        url: '/components/action-button',
        imports: {
          '@skyux/layout': [
            'SkyActionButtonModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Action button')
      },
      {
        name: 'ag-Grid',
        icon: 'table',
        summary: 'A service to provide SKY UX components and styles for ag-Grid.',
        url: '/components/ag-grid',
        imports: {
          '@skyux/ag-grid': [
            'SkyAgGridModule'
          ],
          '@skyux/datetime': [
            'SkyDatepickerModule'
          ],
          '@skyux/lookup': [
            'SkyAutocompleteModule'
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
        getCodeFiles: () => this.getDemoFiles('ag-Grid')
      },
      {
        name: 'Alert',
        icon: 'bell',
        summary: 'The alert component displays a SKY UX-themed alert.',
        url: '/components/alert',
        imports: {
          '@skyux/indicators': [
            'SkyAlertModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Alert')
      },
      {
        name: 'Autocomplete',
        icon: 'search',
        // tslint:disable-next-line
        summary: 'The autocomplete component creates a text input that filters data based on user entries.',
        url: '/components/autocomplete',
        imports: {
          '@skyux/lookup': [
            'SkyAutocompleteModule'
          ],
          '@skyux/indicators': [
            'SkyIconModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Autocomplete')
      },
      {
        name: 'Avatar',
        icon: 'user',
        summary: `The avatar component displays an image to identify a record and allows users to change the image.`,
        url: '/components/avatar',
        imports: {
          '@skyux/avatar': [
            'SkyAvatarModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Avatar')
      },
      {
        name: 'Button',
        icon: 'square-o',
        summary: `The button classes create buttons to trigger actions from within an interface.`,
        url: '/components/button'
      },
      {
        name: 'Card',
        icon: 'th-large',
        summary: `The card module creates a small container to highlight important information.`,
        url: '/components/card',
        imports: {
          '@skyux/layout': [
            'SkyCardModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ],
          '@skyux/popovers': [
            'SkyDropdownModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Card')
      },
      {
        name: 'Character count indicator',
        icon: 'calculator',
        summary: `The character count indicator component extends a text input to apply a character limit and display an indicator.`,
        url: '/components/character-count',
        imports: {
          '@skyux/forms': [
            'SkyCharacterCounterModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Character count')
      },
      {
        name: 'Checkbox',
        icon: 'check-square',
        summary: `The checkbox component renders a SKY UX-themed checkbox.`,
        url: '/components/checkbox',
        imports: {
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Checkbox')
      },
      {
        name: 'Code block',
        icon: 'code',
        summary: `The code block component formats a code block with syntax highlighting.`,
        url: '/components/code-block',
        imports: {
          '@blackbaud/skyux-lib-code-block': [
            'SkyCodeBlockModule'
          ]
        },
        dependencies: {
          '@blackbaud/skyux-lib-code-block': '*',
          '@blackbaud/skyux-lib-clipboard': '*',
          'prismjs': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Code block'),
        disableStackblitz: true
      },
      {
        name: 'Colorpicker',
        icon: 'eyedropper',
        summary: `The colorpicker module allows users to use an input to select colors.`,
        url: '/components/colorpicker',
        imports: {
          '@skyux/colorpicker': [
            'SkyColorpickerModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Colorpicker')
      },
      {
        name: 'Confirm',
        icon: 'list-alt',
        // tslint:disable-next-line
        summary: 'The confirm component launches simple confirmation dialogs to allow users to confirm actions.',
        url: '/components/confirm',
        imports: {
          '@skyux/modals': [
            'SkyConfirmModule'
          ],
          '@skyux/indicators': [
            'SkyAlertModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Confirm')
      },
      {
        name: 'Copy to clipboard',
        icon: 'clipboard',
        // tslint:disable-next-line
        summary: 'The copy to clipboard component creates a button that enables users to copy content to the clipboard.',
        url: '/components/copy-to-clipboard',
        imports: {
          '@blackbaud/skyux-lib-clipboard': [
            'SkyClipboardModule'
          ]
        },
        dependencies: {
          '@blackbaud/skyux-lib-code-block': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Copy to clipboard'),
        disableStackblitz: true
      },
      {
        name: 'Datepicker',
        icon: 'calendar',
        summary: `The datepicker module contains directives to create an input and calendar picker for users select dates or fuzzy dates.`,
        url: '/components/datepicker',
        imports: {
          '@skyux/datetime': [
            'SkyDatepickerModule'
          ]
        },
        getCodeFiles: () => [
          ...this.getDemoFiles('Datepicker'),
          ...this.getDemoFiles('Fuzzy datepicker')
        ]
      },
      {
        name: 'Date range picker',
        icon: 'calendar',
        summary: `The date range picker component creates a text input for users to select a date range from a set of well-known options.`,
        url: '/components/date-range-picker',
        getCodeFiles: () => this.getDemoFiles('Date range picker'),
        disableStackblitz: true
      },
      {
        name: 'Definition list',
        icon: 'list-alt',
        summary: `The definition list module displays a list of label-value pairs.`,
        url: '/components/definition-list',
        imports: {
          '@skyux/layout': [
            'SkyDefinitionListModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Definition list')
      },
      {
        name: 'Dropdown',
        icon: 'caret-down',
        summary: `The dropdown component renders a button that displays a dropdown menu.`,
        url: '/components/dropdown',
        imports: {
          '@skyux/popovers': [
            'SkyDropdownModule'
          ],
          '@skyux/layout': [
            'SkyFluidGridModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Dropdown')
      },
      {
        name: 'Email validation',
        icon: 'check',
        // tslint:disable-next-line
        summary: `The email validation module ensures that user entries in an input element are valid email addresses.`,
        url: '/components/email-validation',
        imports: {
          '@skyux/validation': [
            'SkyEmailValidationModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Email validation')
      },
      {
        name: 'Error',
        icon: 'exclamation',
        // tslint:disable-next-line
        summary: `The error component provides a template for other components to display error messages.`,
        url: '/components/error',
        imports: {
          '@skyux/errors': [
            'SkyErrorModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Error')
      },
      {
        name: 'File attachment',
        icon: 'cloud-upload',
        summary: `The file attachment components allow users to add file attachments to forms.`,
        url: '/components/fileattachments',
        imports: {
          '@skyux/forms': [
            'SkyFileAttachmentsModule'
          ],
          '@skyux/indicators': [
            'SkyAlertModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('File attachment')
      },
      {
        name: 'Filter',
        icon: 'filter',
        // tslint:disable-next-line
        summary: `The filter module provides components that allow users to select filter criteria.`,
        url: '/components/filter',
        imports: {
          '@skyux/lists': [
            'SkyFilterModule',
            'SkyRepeaterModule'
          ],
          '@skyux/list-builder': [
            'SkyListModule'
          ],
          '@skyux/inline-form': [
            'SkyInlineFormModule'
          ],
          '@skyux/modals': [
            'SkyModalModule'
          ],
          '@skyux/layout': [
            'SkyToolbarModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        dependencies: {
          'microedge-rxstate': '*',
          '@skyux/list-builder-common': '*',
          '@skyux/lookup': '*'
        },
        getCodeFiles: () => [
          ...this.getDemoFiles('Filter'),
          ...this.getDemoFiles('Filter inline')
        ]
      },
      {
        name: 'Fluid grid',
        icon: 'table',
        // tslint:disable-next-line
        summary: `The fluid grid component provides a responsive 12-column layout to organize content.`,
        url: '/components/fluid-grid',
        imports: {
          '@skyux/layout': [
            'SkyFluidGridModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Fluid grid')
      },
      {
        name: 'Flyout',
        icon: 'columns',
        // tslint:disable-next-line
        summary: `The flyout service launches a container to display supplementary information related to a task.`,
        url: '/components/flyout',
        imports: {
          '@skyux/flyout': [
            'SkyFlyoutModule'
          ],
          '@skyux/list-builder': [
            'SkyListModule'
          ],
          '@skyux/list-builder-view-grids': [
            'SkyListViewGridModule'
          ],
          '@skyux/avatar': [
            'SkyAvatarModule'
          ],
          '@skyux/layout': [
            'SkyPageSummaryModule'
          ],
          '@skyux/indicators': [
            'SkyKeyInfoModule',
            'SkyLabelModule'
          ]
        },
        dependencies: {
          'microedge-rxstate': '*',
          '@skyux/list-builder-common': '*',
          '@skyux/lists': '*',
          '@skyux/lookup': '*',
          '@skyux/grids': '*',
          '@skyux/list-builder-view-checklist': '*',
          '@skyux/inline-form': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Flyout'),
        disableStackblitz: true
      },
      {
        name: 'Form',
        icon: 'keyboard-o',
        summary: `The form classes create styled inputs and labels for use in forms.`,
        url: '/components/form'
      },
      {
        name: 'Grid',
        icon: 'table',
        summary: `The grid component displays data in a consistent and flexible way.`,
        url: '/components/grid',
        imports: {
          '@skyux/grids': [
            'SkyGridModule'
          ]
        },
        dependencies: {
          '@skyux/list-builder-common': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Grid')
      },
      {
        name: 'Help inline',
        icon: 'question',
        summary: 'The help inline component creates a small help button next to a field.',
        url: '/components/help-inline',
        imports: {
          '@skyux/indicators': [
            'SkyHelpInlineModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Help inline')
      },
      {
        name: 'Highlight',
        icon: 'paint-brush',
        summary: 'The highlight component highlights text within DOM elements.',
        url: '/components/text-highlight',
        imports: {
          '@skyux/indicators': [
            'SkyTextHighlightModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Text highlight')
      },
      {
        name: 'Icon',
        icon: 'picture-o',
        summary: 'The icon component displays a Font Awesome icon.',
        url: '/components/icon',
        imports: {
          '@skyux/indicators': [
            'SkyIconModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Icon')
      },
      {
        name: 'Infinite scroll',
        icon: 'refresh',
        summary: 'The infinite scroll component dynamically loads data as users scroll.',
        url: '/components/infinite-scroll',
        imports: {
          '@skyux/list-builder': [
            'SkyListModule'
          ],
          '@skyux/lists': [
            'SkyInfiniteScrollModule',
            'SkyRepeaterModule'
          ],
          '@skyux/inline-form': [
            'SkyInlineFormModule'
          ],
          '@skyux/grids': [
            'SkyGridModule'
          ],
          '@skyux/list-builder-view-grids': [
            'SkyListViewGridModule'
          ]
        },
        dependencies: {
          'microedge-rxstate': '*',
          '@skyux/list-builder-common': '*',
          '@skyux/lookup': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Infinite scroll'),
        disableStackblitz: true
      },
      {
        name: 'Inline form',
        icon: 'keyboard-o',
        summary: 'The inline form component renders a form in the current view rather than in a modal.',
        url: '/components/inline-form',
        getCodeFiles: () => this.getDemoFiles('Inline form'),
        disableStackblitz: true
      },
      {
        name: 'Key info',
        icon: 'key',
        summary: `The key info component highlights important information such as summary numbers.`,
        url: '/components/key-info',
        imports: {
          '@skyux/indicators': [
            'SkyKeyInfoModule'
          ],
          '@skyux/layout': [
            'SkyFluidGridModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Key info')
      },
      {
        name: 'Label',
        icon: 'tags',
        summary: `The label component calls out important status information such as warnings.`,
        url: '/components/label',
        imports: {
          '@skyux/indicators': [
            'SkyLabelModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Label')
      },
      {
        name: 'Link records',
        icon: 'link',
        summary: `The link records component matches data between two sources.`,
        url: '/components/link-records',
        imports: {
          '@skyux/link-records': [
            'SkyLinkRecordsModule'
          ]
        },
        dependencies: {
          'microedge-rxstate': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Link records')
      },
      {
        name: 'List',
        icon: 'list',
        // tslint:disable-next-line
        summary: `The list module displays a SKY UX-themed list of data in a consistent, flexible way.`,
        url: '/components/list',
        imports: {
          '@skyux/list-builder': [
            'SkyListModule',
            'SkyListPagingModule',
            'SkyListToolbarModule'
          ],
          '@skyux/list-builder-view-grids': [
            'SkyListViewGridModule'
          ]
        },
        dependencies: listDependencies,
        disableStackblitz: true,
        getCodeFiles: () => [
          ...this.getDemoFiles('List'),
          ...this.getDemoFiles('List provider')
        ],
        components: [
          {
            name: 'List filters',
            icon: 'filter',
            // tslint:disable-next-line
            summary: `The list filter module provides components that allow users to select filter criteria.`,
            url: '/components/list-filters',
            imports: {
              '@skyux/list-builder': [
                'SkyListModule',
                'SkyListFiltersModule',
                'SkyListToolbarModule'
              ],
              '@skyux/lists': [
                'SkyFilterModule'
              ],
              '@skyux/list-builder-view-grids': [
                'SkyListViewGridModule'
              ],
              '@skyux/modals': [
                'SkyModalModule'
              ],
              '@skyux/forms': [
                'SkyCheckboxModule'
              ]
            },
            dependencies: listDependencies,
            disableStackblitz: true,
            getCodeFiles: () => [
              ...this.getDemoFiles('List filters'),
              ...this.getDemoFiles('List filters inline')
            ]
          },
          {
            name: 'List paging',
            icon: 'file-o',
            // tslint:disable-next-line
            summary: `The list paging component displays a SKY UX-themed pagination control for a list.`,
            url: '/components/list-paging',
            imports: {
              '@skyux/list-builder': [
                'SkyListModule',
                'SkyListFiltersModule',
                'SkyListPagingModule',
                'SkyListToolbarModule'
              ],
              '@skyux/lists': [
                'SkyFilterModule'
              ],
              '@skyux/list-builder-view-grids': [
                'SkyListViewGridModule'
              ]
            },
            dependencies: listDependencies,
            disableStackblitz: true,
            getCodeFiles: () => this.getDemoFiles('List paging')
          },
          {
            name: 'List toolbar',
            icon: 'wrench',
            summary: `The list toolbar component displays a SKY UX-themed toolbar for a list.`,
            url: '/components/list-toolbar',
            imports: {
              '@skyux/list-builder': [
                'SkyListModule',
                'SkyListFiltersModule',
                'SkyListPagingModule',
                'SkyListToolbarModule',
                'SkyListSecondaryActionsModule'
              ],
              '@skyux/lists': [
                'SkyFilterModule'
              ],
              '@skyux/list-builder-view-grids': [
                'SkyListViewGridModule'
              ],
              '@skyux/indicators': [
                'SkyIconModule'
              ],
              '@skyux/popovers': [
                'SkyDropdownModule'
              ],
              '@skyux/forms': [
                'SkyRadioModule'
              ]
            },
            dependencies: listDependencies,
            disableStackblitz: true,
            getCodeFiles: () => [
              ...this.getDemoFiles('List toolbar'),
              ...this.getDemoFiles('List toolbar custom')
            ]
          },
          {
            name: 'List view checklist',
            icon: 'list-ul',
            summary: `The list view checklist component builds a filterable checkbox list of data.`,
            url: '/components/list-view-checklist',
            imports: {
              '@skyux/list-builder': [
                'SkyListModule',
                'SkyListToolbarModule'
              ],
              '@skyux/list-builder-view-checklist': [
                'SkyListViewChecklistModule'
              ],
              '@skyux/forms': [
                'SkyCheckboxModule',
                'SkyRadioModule'
              ]
            },
            dependencies: listDependencies,
            disableStackblitz: true,
            getCodeFiles: () => this.getDemoFiles('List view checklist')
          },
          {
            name: 'List view grid',
            icon: 'table',
            // tslint:disable-next-line
            summary: `The list view grid component displays a SKY UX-themed grid for a list of data.`,
            url: '/components/list-view-grid',
            imports: {
              '@skyux/list-builder': [
                'SkyListModule',
                'SkyListPagingModule',
                'SkyListToolbarModule'
              ],
              '@skyux/list-builder-view-grids': [
                'SkyListViewGridModule'
              ],
              '@skyux/popovers': [
                'SkyDropdownModule'
              ]
            },
            dependencies: listDependencies,
            disableStackblitz: true,
            getCodeFiles: () => this.getDemoFiles('List view grid')
          }
        ]
      },
      {
        name: 'Lookup',
        icon: 'search',
        // tslint:disable-next-line
        summary: `The lookup component provides a typeahead search input that lets users select multiple items.`,
        url: '/components/lookup',
        imports: {
          '@skyux/lookup': [
            'SkyLookupModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Lookup')
      },
      {
        name: 'Media queries',
        icon: 'mobile',
        // tslint:disable-next-line
        summary: `The media queries service allows users to subscribe to screen size changes at breakpoints.`,
        url: '/components/media-queries',
        imports: {
          '@skyux/core': [
            'SkyMediaQueryModule'
          ],
          '@skyux/indicators': [
            'SkyAlertModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Media query')
      },
      {
        name: 'Modal',
        icon: 'list-alt',
        summary: `The modal component launches modals in a consistent way in SKY UX applications.`,
        url: '/components/modal',
        imports: {
          '@skyux/modals': [
            'SkyModalModule',
            'SkyConfirmModule'
          ],
          '@skyux/indicators': [
            'SkyAlertModule'
          ],
          '@skyux/tiles': [
            'SkyTilesModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Modal')
      },
      {
        name: 'Navbar',
        icon: 'compass',
        summary: `The navbar component displays a list of top-level navigation items.`,
        url: '/components/navbar',
        imports: {
          '@skyux/navbar': [
            'SkyNavbarModule'
          ],
          '@skyux/popovers': [
            'SkyDropdownModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Navbar')
      },
      {
        name: 'Numeric',
        icon: 'calculator',
        summary: 'The numeric pipe shortens long numbers and can format as currency.',
        url: '/components/numeric',
        imports: {
          '@skyux/core': [
            'SkyNumericModule'
          ],
          '@skyux/layout': [
            'SkyDefinitionListModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Numeric'),
        disableStackblitz: true
      },
      {
        name: 'Page summary',
        icon: 'newspaper-o',
        // tslint:disable-next-line
        summary: `The page summary displays critical information and actions for users to access frequently.`,
        url: '/components/page-summary',
        imports: {
          '@skyux/layout': [
            'SkyPageSummaryModule'
          ],
          '@skyux/indicators': [
            'SkyAlertModule',
            'SkyLabelModule',
            'SkyKeyInfoModule'
          ],
          '@skyux/avatar': [
            'SkyAvatarModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ],
          '@skyux/core': [
            'SkyMediaQueryModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Page summary')
      },
      {
        name: 'Paging',
        icon: 'files-o',
        summary: `The paging component displays a SKY UX-themed pagination control.`,
        url: '/components/paging',
        imports: {
          '@skyux/lists': [
            'SkyPagingModule'
          ],
          '@skyux/list-builder': [
            'SkyListModule'
          ],
          '@skyux/inline-form': [
            'SkyInlineFormModule'
          ]
        },
        dependencies: {
          'microedge-rxstate': '*',
          '@skyux/lists': '3.2.2',
          '@skyux/list-builder-common': '*',
          '@skyux/lookup': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Paging')
      },
      {
        name: 'Phone field',
        icon: 'phone',
        // tslint:disable-next-line
        summary: `The phone field module creates a button, search input, and text input for entering and validating phone numbers.`,
        url: '/components/phone-field',
        imports: {
          '@skyux/lookup': [
            'SkyLookupModule'
          ],
          '@skyux/phone-field': [
            'SkyPhoneFielddModule'
          ]
        },
        dependencies: {
          '@skyux/phone-field': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Phone field'),
        disableStackblitz: true
      },
      {
        name: 'Popover',
        icon: 'newspaper-o',
        // tslint:disable-next-line
        summary: 'The popover module displays small chunks of contextual content in an HTML-formatted popover on pages or modals.',
        url: '/components/popover',
        imports: {
          '@skyux/popovers': [
            'SkyDropdownModule',
            'SkyPopoverModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Popover')
      },
      {
        name: 'Progress indicator',
        icon: 'tasks',
        // tslint:disable-next-line
        summary: 'The progress indicator component visually represents progress through a series of sequential steps toward a final goal.',
        url: '/components/progress-indicator',
        imports: {
          '@skyux/progress-indicator': [
            'SkyProgressIndicatorModule'
          ],
          '@skyux/modals': [
            'SkyModalModule'
          ],
          '@skyux/popovers': [
            'SkyPopoverModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Progress Indicator')
      },
      {
        name: 'Radio button',
        icon: 'circle-o',
        summary: `The radio button module ceates a small set of selection inputs and allows users to select one option only.`,
        url: '/components/radio',
        imports: {
          '@skyux/forms': [
            'SkyRadioModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Radio')
      },
      {
        name: 'Repeater',
        icon: 'chevron-down',
        // tslint:disable-next-line
        summary: `The repeater component creates a container to display formatted information for a list of objects.`,
        url: '/components/repeater',
        imports: {
          '@skyux/lists': [
            'SkyRepeaterModule'
          ],
          '@skyux/inline-form': [
            'SkyInlineFormModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Repeater'),
        disableStackblitz: true
      },
      {
        name: 'Search',
        icon: 'search',
        // tslint:disable-next-line
        summary: `The search component creates a mobile-responsive input control for users to enter search criteria.`,
        url: '/components/search',
        imports: {
          '@skyux/list-builder': [
            'SkyListModule'
          ],
          '@skyux/lookup': [
            'SkySearchModule'
          ],
          '@skyux/layout': [
            'SkyToolbarModule'
          ],
          '@skyux/lists': [
            'SkyRepeaterModule'
          ],
          '@skyux/inline-form': [
            'SkyInlineFormModule'
          ]
        },
        dependencies: {
          'microedge-rxstate': '*',
          '@skyux/list-builder-common': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Search')
      },
      {
        name: 'Sectioned form',
        icon: 'object-group',
        // tslint:disable-next-line
        summary: `The sectioned form component combines forms and lets users target specific areas.`,
        url: '/components/sectioned-form',
        imports: {
          '@skyux/tabs': [
            'SkySectionedFormModule'
          ],
          '@skyux/modals': [
            'SkyModalModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Sectioned form'),
        disableStackblitz: true
      },
      {
        name: 'Select field',
        icon: 'search',
        // tslint:disable-next-line
        summary: `The select field component launches a modal that displays items for users to select.`,
        url: '/components/select-field',
        imports: {
          '@skyux/select-field': [
            'SkySelectFieldModule'
          ],
          '@skyux/list-builder-view-checklist': [
            'SkyListViewChecklistModule'
          ],
          '@skyux/list-builder': [
            'SkyListModule'
          ],
          '@skyux/lookup': [
            'SkyLookupModule'
          ],
          '@skyux/layout': [
            'SkyFluidGridModule'
          ]
        },
        dependencies: {
          'microedge-rxstate': '*',
          '@skyux/list-builder-common': '*',
          '@skyux/lists': '*',
          '@skyux/inline-form': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Select field'),
        disableStackblitz: true
      },
      {
        name: 'Sort',
        icon: 'sort',
        summary: `The sort component allows users to select sorting criteria.`,
        url: '/components/sort',
        imports: {
          '@skyux/lists': [
            'SkySortModule',
            'SkyRepeaterModule'
          ],
          '@skyux/inline-form': [
            'SkyInlineFormModule'
          ],
          '@skyux/layout': [
            'SkyToolbarModule'
          ]
        },
        dependencies: {
          '@skyux/list-builder': '*',
          'microedge-rxstate': '*',
          '@skyux/list-builder-common': '*'
        },
        getCodeFiles: () => this.getDemoFiles('Sort'),
        disableStackblitz: true
      },
      {
        name: 'Split view',
        icon: 'columns',
        summary: `The split view component displays a list alongside a workspace where users can view details and take actions.`,
        url: '/components/split-view',
        getCodeFiles: () => this.getDemoFiles('Split view'),
        disableStackblitz: true
      },
      {
        name: 'Status indicator',
        icon: 'exclamation-triangle',
        // tslint:disable-next-line
        summary: `The status indicator classes provide icons to draw attention to status information.`,
        url: '/components/status-indicator'
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
        name: 'Tabs',
        icon: 'folder-open-o',
        summary: `The tabs module renders tabs that divide large subsets of content on a page.`,
        url: '/components/tabs',
        imports: {
          '@skyux/tabs': [
            'SkyTabsModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Tabs')
      },
      {
        name: 'Text expand',
        icon: 'text-height',
        // tslint:disable-next-line
        summary: `The text expand component truncates long blocks of text with an ellipsis and a link to expand the full text.`,
        url: '/components/text-expand',
        imports: {
          '@skyux/layout': [
            'SkyTextExpandModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Text expand'),
        disableStackblitz: true
      },
      {
        name: 'Text expand repeater',
        icon: 'list',
        // tslint:disable-next-line
        summary: `The text expand repeater component truncates a list of items and initially displays a limited number of items.`,
        url: '/components/text-expand-repeater',
        imports: {
          '@skyux/layout': [
            'SkyTextExpandRepeaterModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Text expand repeater'),
        disableStackblitz: true
      },
      {
        name: 'Tile',
        icon: 'th-large',
        // tslint:disable-next-line
        summary: `The tile component creates a collapsible container that is a building block for pages and forms.`,
        url: '/components/tile',
        imports: {
          '@skyux/tiles': [
            'SkyTilesModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Tile')
      },
      {
        name: 'Timepicker',
        icon: 'clock-o',
        summary: `The timepicker module allows users to use an input to select times.`,
        url: '/components/timepicker',
        imports: {
          '@skyux/datetime': [
            'SkyTimepickerModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Timepicker')
      },
      {
        name: 'Toast',
        icon: 'envelope',
        // tslint:disable-next-line
        summary: `The toast module launches a container to display a message over a page's content.`,
        url: '/components/toast',
        imports: {
          '@skyux/toast': [
            'SkyToastModule'
          ],
          '@skyux/forms': [
            'SkyRadioModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Toast')
      },
      {
        name: 'Toggle switch',
        icon: 'toggle-on',
        summary: `The toggle switch component renders a SKY UX-themed switch for values that can either be "on" or "off."`,
        url: '/components/toggle-switch',
        imports: {
          '@skyux/forms': [
            'SkyToggleSwitchModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Toggle switch')
      },
      {
        name: 'Tokens',
        icon: 'th-large',
        summary: `The tokens component displays a series of objects for users to interact with.`,
        url: '/components/tokens',
        imports: {
          '@skyux/indicators': [
            'SkyTokensModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Tokens'),
        disableStackblitz: true
      },
      {
        name: 'Toolbar',
        icon: 'bars',
        summary: `The toolbar component displays a SKY UX-themed toolbar.`,
        url: '/components/toolbar',
        imports: {
          '@skyux/layout': [
            'SkyToolbarModule'
          ],
          '@skyux/indicators': [
            'SkyIconModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Toolbar')
      },
      {
        name: 'URL validation',
        icon: 'check',
        summary: 'The URL validation module ensures that user entries in an input element are valid URLs.',
        url: '/components/url-validation',
        imports: {
          '@skyux/validation': [
            'SkyUrlValidationModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('URL validation')
      },
      {
        name: 'Vertical tabs',
        icon: 'folder-open-o',
        summary: `The vertical tabs module displays large amounts of information within collapsible groups.`,
        url: '/components/vertical-tabs',
        imports: {
          '@skyux/tabs': [
            'SkyVerticalTabsetModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Vertical tabs'),
        disableStackblitz: true
      },
      {
        name: 'Wait',
        icon: 'spinner',
        summary: `The wait directive and service show wait indication on elements.`,
        url: '/components/wait',
        imports: {
          '@skyux/indicators': [
            'SkyWaitModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Wait')
      },
      {
        name: 'Wizard',
        icon: 'magic',
        // tslint:disable-next-line
        summary: `The wizard guides users through a set of pre-defined steps in a particular order.`,
        url: '/components/wizard',
        imports: {
          '@skyux/progress-indicator': [
            'SkyProgressIndicatorModule'
          ],
          '@skyux/modals': [
            'SkyModalModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('Wizard'),
        disableStackblitz: true
      }
    ];
  }

  public getDemoFiles(componentName: string): any {
    const docsDemo = this.docsDemoService.getComponent(componentName);

    if (!docsDemo) {
      const skyDemo = this.skyDemoService.getComponent(componentName);

      if (!skyDemo) {
        console.warn('No demo files found for:', componentName);
        return [];
      } else {
        return this.skyDemoService.getComponent(componentName).files;
      }
    } else {
      return this.docsDemoService.getComponent(componentName).files;
    }
  }
}
