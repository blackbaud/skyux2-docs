import { Component } from '@angular/core';

@Component({
  selector: 'sky-list-action-buttons',
  templateUrl: 'list-action-button.component.html'
})
export class ListActionButtonsComponent {
  public routes = [
    {
      name: 'Overview',
      path: '/components/list/overview',
      icon: 'list',
      // tslint:disable-next-line
      summary: 'The list component displays a SKY UX-themed list of data in a consistent and flexible way.'
    },
    {
      name: 'Filters',
      path: '/components/list/filters',
      icon: 'filter',
      // tslint:disable-next-line
      summary: 'The list filters module provides components that allow users to select filter criteria.'
    },
    {
      name: 'Paging',
      path: '/components/list/paging',
      icon: 'file-o',
      // tslint:disable-next-line
      summary: 'The list paging component displays a SKY UX-themed pagination control for a list.'
    },
    {
      name: 'Toolbar',
      path: '/components/list/toolbar',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'The list toolbar component displays a SKY UX-themed toolbar for a list.'
    },
    {
      name: 'Checklist',
      path: '/components/list/checklist',
      icon: 'list-ul',
      // tslint:disable-next-line
      summary: 'The list view checklist component builds a filterable checkbox list of data.'
    },
    {
      name: 'Grid',
      path: '/components/list/grid',
      icon: 'table',
      // tslint:disable-next-line
      summary: 'The list view grid component provides a SKY UX-themed grid for a list of data.'
    }
  ];
}
