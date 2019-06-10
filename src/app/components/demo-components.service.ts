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
        getCodeFiles: () => this.getDemoFiles('SkyActionButtonDemoComponent')
      },
      {
        name: 'Alert',
        icon: 'bell',
        summary: 'The alert component displays a SKY UX-themed alert.',
        url: '/components/alert',
        getCodeFiles: () => this.getDemoFiles('SkyAlertDemoComponent')
      },
      {
        name: 'Autocomplete',
        icon: 'search',
        summary: 'The autocomplete component creates a text input that filters data based on user entries.',
        url: '/components/autocomplete',
        getCodeFiles: () => this.getDemoFiles('SkyAutocompleteDemoComponent')
      },
      {
        name: 'Avatar',
        icon: 'user',
        // tslint:disable-next-line
        summary: `The avatar component displays an image and allows users to change the image.`,
        url: '/components/avatar',
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
        getCodeFiles: () => this.getDemoFiles('SkyCardDemoComponent')
      },
      {
        name: 'Checkbox',
        icon: 'check-square',
        // tslint:disable-next-line
        summary: `The checkbox component renders a SKY UX-themed checkbox.`,
        url: '/components/checkbox',
        getCodeFiles: () => this.getDemoFiles('SkyCheckboxDemoComponent')
      },
      {
        name: 'Code block',
        icon: 'code',
        // tslint:disable-next-line
        summary: `The code block component formats a code block with syntax highlighting.`,
        url: '/components/code-block',
        getCodeFiles: () => this.getDemoFiles('SkyCodeBlockDemoComponent')
      },
      {
        name: 'Colorpicker',
        icon: 'eyedropper',
        // tslint:disable-next-line
        summary: `The colorpicker module allows users to use an input to select colors.`,
        url: '/components/colorpicker',
        getCodeFiles: () => this.getDemoFiles('SkyColorpickerDemoComponent')
      },
      {
        name: 'Confirm',
        icon: 'list-alt',
        summary: 'The confirm component launches simple confirmation dialogs to allow users to confirm actions.',
        url: '/components/confirm',
        getCodeFiles: () => this.getDemoFiles('SkyConfirmDemoComponent')
      },
      {
        name: 'Copy to clipboard',
        icon: 'clipboard',
        summary: 'The copy to clipboard component creates a button that enables users to copy content to the clipboard.',
        url: '/components/copy-to-clipboard',
        getCodeFiles: () => this.getDemoFiles('SkyCopyToClipboardDemoComponent')
      },
      {
        name: 'Datepicker',
        icon: 'calendar',
        // tslint:disable-next-line
        summary: `The datepicker module allows users to use an input and calendar to select dates.`,
        url: '/components/datepicker',
        getCodeFiles: () => this.getDemoFiles('SkyDatepickerDemoComponent')
      },
      {
        name: 'Date range picker',
        icon: 'calendar',
        summary: `The date range picker component creates a text input for users to select a date range from a set of well-known options.`,
        url: '/components/date-range-picker',
        getCodeFiles: () => this.getDemoFiles('SkyDateRangePickerDemoComponent')
      },
      {
        name: 'Definition list',
        icon: 'list-alt',
        // tslint:disable-next-line
        summary: `The definition list component displays a list of label-value pairs.`,
        url: '/components/definition-list',
        getCodeFiles: () => this.getDemoFiles('SkyDefinitionListDemoComponent')
      },
      {
        name: 'Dropdown',
        icon: 'caret-down',
        // tslint:disable-next-line
        summary: `The dropdown component renders a button that displays a dropdown menu.`,
        url: '/components/dropdown',
        getCodeFiles: () => this.getDemoFiles('SkyDropdownDemoComponent')
      },
      {
        name: 'Email validation',
        icon: 'check',
        // tslint:disable-next-line
        summary: `The email validation directive ensures that user entries in an input element are valid email addresses.`,
        url: '/components/email-validation',
        getCodeFiles: () => this.getDemoFiles('SkyEmailValidationDemoComponent')
      },
      {
        name: 'Error',
        icon: 'exclamation',
        // tslint:disable-next-line
        summary: `The error component provides a template for other components to display error messages.`,
        url: '/components/error',
        getCodeFiles: () => this.getDemoFiles('SkyErrorDemoComponent')
      },
      {
        name: 'File attachment',
        icon: 'cloud-upload',
        // tslint:disable-next-line
        summary: `The file attachment components allow users to add file attachments to forms.`,
        url: '/components/fileattachments',
        getCodeFiles: () => this.getDemoFiles('SkyFileAttachmentDemoComponent')
      },
      {
        name: 'Filter',
        icon: 'filter',
        // tslint:disable-next-line
        summary: `The filter module provides components that allow users to select filter criteria.`,
        url: '/components/filter',
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
        getCodeFiles: () => this.getDemoFiles('SkyFluidGridDemoComponent')
      },
      {
        name: 'Flyout',
        icon: 'columns',
        // tslint:disable-next-line
        summary: `The flyout service launches a container to display supplementary information related to a task.`,
        url: '/components/flyout',
        getCodeFiles: () => this.getDemoFiles('SkyFlyoutDemoComponent')
      },
      {
        name: 'Form',
        icon: 'keyboard-o',
        // tslint:disable-next-line
        summary: `The form classes create styled inputs and labels for use in forms.`,
        url: '/components/form'
      },
      {
        name: 'Grid',
        icon: 'table',
        // tslint:disable-next-line
        summary: `The grid component displays data in a consistent and flexible way.`,
        url: '/components/grid',
        getCodeFiles: () => this.getDemoFiles('SkyGridDemoComponent')
      },
      {
        name: 'Help inline',
        icon: 'question',
        summary: 'The help inline component creates a small help button next to a field.',
        url: '/components/help-inline',
        getCodeFiles: () => this.getDemoFiles('SkyHelpInlineDemoComponent')
      },
      {
        name: 'Highlight',
        icon: 'paint-brush',
        summary: 'The highlight component highlights text within DOM elements.',
        url: '/components/text-highlight',
        getCodeFiles: () => this.getDemoFiles('SkyTextHighlightDemoComponent')
      },
      {
        name: 'Icon',
        icon: 'picture-o',
        summary: 'The icon component displays a Font Awesome icon.',
        url: '/components/icon',
        getCodeFiles: () => this.getDemoFiles('SkyIconDemoComponent')
      },
      {
        name: 'Infinite scroll',
        icon: 'refresh',
        summary: 'The infinite scroll component dynamically loads data as users scroll.',
        url: '/components/infinite-scroll',
        getCodeFiles: () => this.getDemoFiles('SkyInfiniteScrollDemoComponent')
      },
      {
        name: 'Inline form',
        icon: 'keyboard-o',
        summary: 'The inline form component renders a form in the current view rather than in a modal.',
        url: '/components/inline-form',
        getCodeFiles: () => this.getDemoFiles('SkyInlineFormDemoComponent')
      },
      {
        name: 'Key info',
        icon: 'key',
        // tslint:disable-next-line
        summary: `The key info component highlights important information such as summary numbers.`,
        url: '/components/key-info',
        getCodeFiles: () => this.getDemoFiles('SkyKeyInfoDemoComponent')
      },
      {
        name: 'Label',
        icon: 'tags',
        // tslint:disable-next-line
        summary: `The label component calls out important status information such as warnings.`,
        url: '/components/label',
        getCodeFiles: () => this.getDemoFiles('SkyLabelDemoComponent')
      },
      {
        name: 'Link records',
        icon: 'link',
        // tslint:disable-next-line
        summary: `The link records component matches data between two sources.`,
        url: '/components/link-records',
        getCodeFiles: () => this.getDemoFiles('SkyLinkRecordsDemoComponent')
      },
      {
        name: 'List',
        icon: 'list',
        // tslint:disable-next-line
        summary: `The list module displays a SKY UX-themed list of data in a consistent, flexible way.`,
        url: '/components/list',
        getCodeFiles: () => [
          ...this.getDemoFiles('SkyListDemoComponent'),
          ...this.getDemoFiles('SkyListProviderDemoComponent')
        ],
        components: [
          {
            name: 'List',
            icon: 'list',
            // tslint:disable-next-line
            summary: `The list component displays data in a consistent and flexible way.`,
            url: '/components/list',
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
            getCodeFiles: () => this.getDemoFiles('SkyListPagingDemoComponent')
          },
          {
            name: 'List toolbar',
            icon: 'wrench',
            // tslint:disable-next-line
            summary:
            `The list toolbar component displays a SKY UX-themed toolbar for a list.`,
            url: '/components/list-toolbar',
            getCodeFiles: () => [
              ...this.getDemoFiles('SkyListToolbarDemoComponent'),
              ...this.getDemoFiles('SkyListToolbarCustomDemoComponent')
            ]
          },
          {
            name: 'List view checklist',
            icon: 'list-ul',
            // tslint:disable-next-line
            summary: `The list view checklist component builds a filterable checkbox list of data.`,
            url: '/components/list-view-checklist',
            getCodeFiles: () => this.getDemoFiles('SkyListViewChecklistDemoComponent')
          },
          {
            name: 'List view grid',
            icon: 'table',
            // tslint:disable-next-line
            summary: `The list view grid component displays a SKY UX-themed grid for a list of data.`,
            url: '/components/list-view-grid',
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
        getCodeFiles: () => this.getDemoFiles('SkyLookupDemoComponent')
      },
      {
        name: 'Media queries',
        icon: 'mobile',
        // tslint:disable-next-line
        summary: `The media queries service allows users to subscribe to screen size changes at breakpoints.`,
        url: '/components/media-queries',
        getCodeFiles: () => this.getDemoFiles('SkyMediaQueryDemoComponent')
      },
      {
        name: 'Modal',
        icon: 'list-alt',
        // tslint:disable-next-line
        summary: `The modal component launches modals in a consistent way in SKY UX applications.`,
        url: '/components/modal',
        getCodeFiles: () => this.getDemoFiles('SkyModalDemoComponent')
      },
      {
        name: 'Navbar',
        icon: 'compass',
        // tslint:disable-next-line
        summary: `The navbar component displays a list of top-level navigation items.`,
        url: '/components/navbar',
        getCodeFiles: () => this.getDemoFiles('SkyNavbarDemoComponent')
      },
      {
        name: 'Numeric',
        icon: 'calculator',
        summary: 'The numeric pipe shortens long numbers and can format as currency.',
        url: '/components/numeric',
        getCodeFiles: () => this.getDemoFiles('SkyNumericDemoComponent')
      },
      {
        name: 'Page summary',
        icon: 'newspaper-o',
        // tslint:disable-next-line
        summary: `The page summary displays critical information and actions for users to access frequently.`,
        url: '/components/page-summary',
        getCodeFiles: () => this.getDemoFiles('SkyPageSummaryDemoComponent')
      },
      {
        name: 'Paging',
        icon: 'files-o',
        // tslint:disable-next-line
        summary: `The paging component displays a SKY UX-themed pagination control.`,
        url: '/components/paging',
        getCodeFiles: () => this.getDemoFiles('SkyPagingDemoComponent')
      },
      {
        name: 'Phone field',
        icon: 'phone',
        // tslint:disable-next-line
        summary: `The phone field module creates a button and text input to validate international phone numbers.`,
        url: '/components/phone-field',
        getCodeFiles: () => this.getDemoFiles('SkyPhoneFieldDemoComponent')
      },
      {
        name: 'Popover',
        icon: 'newspaper-o',
        // tslint:disable-next-line
        summary: 'The popover component provides an HTML-formatted popover that is displayed by a trigger element.',
        url: '/components/popover',
        getCodeFiles: () => this.getDemoFiles('SkyPopoverDemoComponent')
      },
      {
        name: 'Progress indicator',
        icon: 'tasks',
        // tslint:disable-next-line
        summary: 'The progress indicator component visually represents progress through a series of sequential steps toward a final goal.',
        url: '/components/progress-indicator',
        getCodeFiles: () => this.getDemoFiles('SkyProgressIndicatorDemoComponent')
      },
      {
        name: 'Radio button',
        icon: 'circle-o',
        // tslint:disable-next-line
        summary: `The radio button component renders a SKY UX-themed radio button.`,
        url: '/components/radio',
        getCodeFiles: () => this.getDemoFiles('SkyRadioDemoComponent')
      },
      {
        name: 'Repeater',
        icon: 'chevron-down',
        // tslint:disable-next-line
        summary: `The repeater component creates a container to display formatted information for a list of objects.`,
        url: '/components/repeater',
        getCodeFiles: () => this.getDemoFiles('SkyRepeaterDemoComponent')
      },
      {
        name: 'Search',
        icon: 'search',
        // tslint:disable-next-line
        summary: `The search component creates a mobile-responsive input control for users to enter search criteria.`,
        url: '/components/search',
        getCodeFiles: () => this.getDemoFiles('SkySearchDemoComponent')
      },
      {
        name: 'Sectioned form',
        icon: 'object-group',
        // tslint:disable-next-line
        summary: `The sectioned form component combines forms and lets users target specific areas.`,
        url: '/components/sectioned-form',
        getCodeFiles: () => this.getDemoFiles('SkySectionedFormDemoComponent')
      },
      {
        name: 'Select field',
        icon: 'search',
        // tslint:disable-next-line
        summary: `The select field component launches a modal that displays items for users to select.`,
        url: '/components/select-field',
        getCodeFiles: () => this.getDemoFiles('SkySelectFieldDemoComponent')
      },
      {
        name: 'Sort',
        icon: 'sort',
        // tslint:disable-next-line
        summary: `The sort component allows users to select sorting criteria.`,
        url: '/components/sort',
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
        getCodeFiles: () => this.getDemoFiles('SkySummaryActionBarDemoComponent')
      },
      {
        name: 'Tabs',
        icon: 'folder-open-o',
        summary: `The tabs module contains components to render a tabset.`,
        url: '/components/tabs',
        getCodeFiles: () => this.getDemoFiles('SkyTabsDemoComponent')
      },
      {
        name: 'Text expand',
        icon: 'text-height',
        // tslint:disable-next-line
        summary: `The text expand component truncates long blocks of text with an ellipsis and a link to expand the full text.`,
        url: '/components/text-expand',
        getCodeFiles: () => this.getDemoFiles('SkyTextExpandDemoComponent')
      },
      {
        name: 'Text expand repeater',
        icon: 'list',
        // tslint:disable-next-line
        summary: `The text expand repeater component truncates a list of items and initially displays a limited number of items.`,
        url: '/components/text-expand-repeater',
        getCodeFiles: () => this.getDemoFiles('SkyTextExpandRepeaterDemoComponent')
      },
      {
        name: 'Tile',
        icon: 'th-large',
        // tslint:disable-next-line
        summary: `The tile component creates a collapsible container that is a building block for pages and forms.`,
        url: '/components/tile',
        getCodeFiles: () => this.getDemoFiles('SkyTileDemoComponent')
      },
      {
        name: 'Timepicker',
        icon: 'clock-o',
        // tslint:disable-next-line
        summary: `The timepicker module allows users to use an input to select times.`,
        url: '/components/timepicker',
        getCodeFiles: () => this.getDemoFiles('SkyTimepickerDemoComponent')
      },
      {
        name: 'Toast',
        icon: 'envelope',
        // tslint:disable-next-line
        summary: `The toast module launches a container to display a message over a page's content.`,
        url: '/components/toast',
        getCodeFiles: () => this.getDemoFiles('SkyToastDemoComponent')
      },
      {
        name: 'Tokens',
        icon: 'th-large',
        // tslint:disable-next-line
        summary: `The tokens component displays a series of objects for users to interact with.`,
        url: '/components/tokens',
        getCodeFiles: () => this.getDemoFiles('SkyTokensDemoComponent')
      },
      {
        name: 'Toolbar',
        icon: 'bars',
        // tslint:disable-next-line
        summary: `The toolbar component displays a SKY UX-themed toolbar.`,
        url: '/components/toolbar',
        getCodeFiles: () => this.getDemoFiles('SkyToolbarDemoComponent')
      },
      {
        name: 'URL validation',
        icon: 'check',
        summary: 'The URL validation module allows users to validate URL format.',
        url: '/components/url-validation',
        getCodeFiles: () => this.getDemoFiles('SkyUrlValidationDemoComponent')
      },
      {
        name: 'Vertical tabs',
        icon: 'folder-open-o',
        summary: `The vertical tabs module displays large amounts of information within collapsible groups.`,
        url: '/components/vertical-tabs',
        getCodeFiles: () => this.getDemoFiles('SkyVerticalTabsDemoComponent')
      },
      {
        name: 'Wait',
        icon: 'spinner',
        // tslint:disable-next-line
        summary: `The wait directive and service show wait indication on elements.`,
        url: '/components/wait',
        getCodeFiles: () => this.getDemoFiles('SkyWaitDemoComponent')
      },
      {
        name: 'Wizard',
        icon: 'magic',
        // tslint:disable-next-line
        summary: `The wizard guides users through a set of pre-defined steps in a particular order.`,
        url: '/components/wizard',
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
