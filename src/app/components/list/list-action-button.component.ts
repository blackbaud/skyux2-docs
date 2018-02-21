import { Component } from '@angular/core';

@Component({
  selector: 'sky-list-action-buttons',
  templateUrl: 'list-action-button.component.html'
})
export class ListActionButtonsComponent {
  public routes = [
    {
      name: 'List',
      path: '/components/list/list',
      icon: 'list',
      // tslint:disable-next-line
      summary: 'The list component displays data a SKY UX-themed list of data in a consistent and flexible way.'
    },
    {
      name: 'List filters',
      path: '/components/list/list-filters',
      icon: 'filter',
      // tslint:disable-next-line
      summary: 'The list filter module provides components that allow users to select filter criteria.'
    },
    {
      name: 'List paging',
      path: '/components/list/list-paging',
      icon: 'file-o',
      // tslint:disable-next-line
      summary: 'The list paging component displays a SKY UX-themed pagination control for a list.'
    },
    {
      name: 'List toolbar',
      path: '/components/list/list-toolbar',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'The list toolbar component displays a SKY UX-themed toolbar for a list.'
    },
    {
      name: 'List view checklist',
      path: '/components/list/list-view-checklist',
      icon: 'list-ul',
      // tslint:disable-next-line
      summary: 'The list view checklist component builds a filterable checkbox list of data.'
    },
    {
      name: 'List view grid',
      path: '/components/list/list-view-grid',
      icon: 'table',
      // tslint:disable-next-line
      summary: 'The list view grid component displays a SKY UX-themed grid for a list of data.'
    }
  ];
}
