import { Injectable } from '@angular/core';

import { SkyDemoService } from '@blackbaud/skyux/dist/demo';

import { SkyDemoComponent } from './demo-component';
import { SkyDocsDemoCodeService } from '../demos/demos.service';

@Injectable()
export class SkyDemoComponentsService {
  public constructor(
    private skyDemoService: SkyDemoService,
    private docsDemoService: SkyDocsDemoCodeService
  ) { }

  public getComponents(filter?: string): SkyDemoComponent[] {
    return [
      {
        name: 'Action button',
        icon: 'square-o',
        // tslint:disable-next-line
        summary:
        `The action button component creates a large button with an icon, heading, and details.`,
        url: '/components/action-button',
        imports: {
          '@skyux/layout': [
            'SkyActionButtonModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyActionButtonDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyAlertDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyAutocompleteDemoComponent')
      },
      {
        name: 'Avatar',
        icon: 'user',
        summary: `The avatar component displays an image and allows users to change the image.`,
        url: '/components/avatar',
        imports: {
          '@skyux/avatar': [
            'SkyAvatarModule'
          ],
          '@skyux/forms': [
            'SkyCheckboxModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyAvatarDemoComponent')
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
        summary: `The card component creates a small container to highlight important information.`,
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
        getCodeFiles: () => this.getDemoFiles('SkyCardDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyCheckboxDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyCodeBlockDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyColorpickerDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyConfirmDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyCopyToClipboardDemoComponent')
      },
      {
        name: 'Datepicker',
        icon: 'calendar',
        summary: `The datepicker module allows users to use an input and calendar to select dates.`,
        url: '/components/datepicker',
        imports: {
          '@skyux/datetime': [
            'SkyDatepickerModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyDatepickerDemoComponent')
      },
      {
        name: 'Definition list',
        icon: 'list-alt',
        summary: `The definition list component displays a list of label-value pairs.`,
        url: '/components/definition-list',
        imports: {
          '@skyux/layout': [
            'SkyDefinitionListModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyDefinitionListDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyDropdownDemoComponent')
      },
      {
        name: 'Email validation',
        icon: 'check',
        // tslint:disable-next-line
        summary: `The email validation directive ensures that user entries in an input element are valid email addresses.`,
        url: '/components/email-validation',
        imports: {
          '@skyux/validation': [
            'SkyEmailValidationModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyEmailValidationDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyErrorDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyFileAttachmentDemoComponent')
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
        getCodeFiles: () => [
          ...this.getDemoFiles('SkyFilterDemoComponent'),
          ...this.getDemoFiles('SkyFilterInlineDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyFluidGridDemoComponent')
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
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyFlyoutDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyGridDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyHelpInlineDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyTextHighlightDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyIconDemoComponent')
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
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyInfiniteScrollDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyKeyInfoDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyLabelDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyLinkRecordsDemoComponent')
      },
      {
        name: 'List',
        icon: 'list',
        // tslint:disable-next-line
        summary: `The list module displays a SKY UX-themed list of data in a consistent, flexible way.`,
        url: '/components/list',
        imports: {
          '@skyux/ASDF': [
            'ASDF'
          ]
        },
        getCodeFiles: () => [
          ...this.getDemoFiles('SkyListDemoComponent'),
          ...this.getDemoFiles('SkyListProviderDemoComponent')
        ],
        components: [
          {
            name: 'List',
            icon: 'list',
            summary: `The list component displays data in a consistent and flexible way.`,
            url: '/components/list',
            imports: {
              '@skyux/ASDF': [
                'ASDF'
              ]
            },
            getCodeFiles: () => [
              ...this.getDemoFiles('SkyListDemoComponent'),
              ...this.getDemoFiles('SkyListProviderDemoComponent')
            ]
          },
          {
            name: 'List filters',
            icon: 'filter',
            // tslint:disable-next-line
            summary: `The list filter module provides components that allow users to select filter criteria.`,
            url: '/components/list-filters',
            imports: {
              '@skyux/ASDF': [
                'ASDF'
              ]
            },
            getCodeFiles: () => [
              ...this.getDemoFiles('SkyListFiltersDemoComponent'),
              ...this.getDemoFiles('SkyListFiltersInlineDemoComponent')
            ]
          },
          {
            name: 'List paging',
            icon: 'file-o',
            // tslint:disable-next-line
            summary: `The list paging component displays a SKY UX-themed pagination control for a list.`,
            url: '/components/list-paging',
            imports: {
              '@skyux/ASDF': [
                'ASDF'
              ]
            },
            getCodeFiles: () => this.getDemoFiles('SkyListPagingDemoComponent')
          },
          {
            name: 'List toolbar',
            icon: 'wrench',
            summary: `The list toolbar component displays a SKY UX-themed toolbar for a list.`,
            url: '/components/list-toolbar',
            imports: {
              '@skyux/ASDF': [
                'ASDF'
              ]
            },
            getCodeFiles: () => [
              ...this.getDemoFiles('SkyListToolbarDemoComponent'),
              ...this.getDemoFiles('SkyListToolbarCustomDemoComponent')
            ]
          },
          {
            name: 'List view checklist',
            icon: 'list-ul',
            summary: `The list view checklist component builds a filterable checkbox list of data.`,
            url: '/components/list-view-checklist',
            imports: {
              '@skyux/ASDF': [
                'ASDF'
              ]
            },
            getCodeFiles: () => this.getDemoFiles('SkyListViewChecklistDemoComponent')
          },
          {
            name: 'List view grid',
            icon: 'table',
            // tslint:disable-next-line
            summary: `The list view grid component displays a SKY UX-themed grid for a list of data.`,
            url: '/components/list-view-grid',
            imports: {
              '@skyux/ASDF': [
                'ASDF'
              ]
            },
            getCodeFiles: () => this.getDemoFiles('SkyListViewGridDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyLookupDemoComponent')
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
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyMediaQueryDemoComponent')
      },
      {
        name: 'Modal',
        icon: 'list-alt',
        summary: `The modal component launches modals in a consistent way in SKY UX applications.`,
        url: '/components/modal',
        imports: {
          '@skyux/modals': [
            'SkyModalModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyModalDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyNavbarDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyNumericDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyPageSummaryDemoComponent')
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
          '@skyux/inline-form': [
            'SkyInlineFormModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyPagingDemoComponent')
      },
      {
        name: 'Popover',
        icon: 'newspaper-o',
        // tslint:disable-next-line
        summary: 'The popover component provides an HTML-formatted popover that is displayed by a trigger element.',
        url: '/components/popover',
        imports: {
          '@skyux/popovers': [
            'SkyPopoverModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyPopoverDemoComponent')
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
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyProgressIndicatorDemoComponent')
      },
      {
        name: 'Radio button',
        icon: 'circle-o',
        summary: `The radio button component renders a SKY UX-themed radio button.`,
        url: '/components/radio',
        imports: {
          '@skyux/forms': [
            'SkyRadioModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyRadioDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyRepeaterDemoComponent')
      },
      {
        name: 'Search',
        icon: 'search',
        // tslint:disable-next-line
        summary: `The search component creates a mobile-responsive input control for users to enter search criteria.`,
        url: '/components/search',
        imports: {
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
        getCodeFiles: () => this.getDemoFiles('SkySearchDemoComponent')
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
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkySectionedFormDemoComponent')
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
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkySelectFieldDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkySortDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkySummaryActionBarDemoComponent')
      },
      {
        name: 'Tabs',
        icon: 'folder-open-o',
        summary: `The tabs module contains components to render a tabset.`,
        url: '/components/tabs',
        imports: {
          '@skyux/tabs': [
            'SkyTabsModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyTabsDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyTextExpandDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyTextExpandRepeaterDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyTileDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyTimepickerDemoComponent')
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
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyToastDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyTokensDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyToolbarDemoComponent')
      },
      {
        name: 'URL validation',
        icon: 'check',
        summary: 'The URL validation module allows users to validate URL format.',
        url: '/components/url-validation',
        imports: {
          '@skyux/validation': [
            'SkyUrlValidationModule'
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyUrlValidationDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyVerticalTabsDemoComponent')
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
        getCodeFiles: () => this.getDemoFiles('SkyWaitDemoComponent')
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
          ]
        },
        getCodeFiles: () => this.getDemoFiles('SkyWizardDemoComponent')
      }
    ];
  }

  public getDemoFiles(componentConstructorName: string): any {
    const docsDemo = this.docsDemoService.getComponent(componentConstructorName);

    if (!docsDemo) {
      const skyDemo = this.skyDemoService.getComponent(componentConstructorName);

      if (!skyDemo) {
        console.warn('No demo files found for:', componentConstructorName);
        return [];
      } else {
        return this.skyDemoService.getComponent(componentConstructorName).files;
      }
    } else {
      return this.docsDemoService.getComponent(componentConstructorName).files;
    }
  }
}
