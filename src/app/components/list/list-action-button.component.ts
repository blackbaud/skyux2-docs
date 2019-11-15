import { Component } from '@angular/core';

@Component({
  selector: 'sky-list-action-buttons',
  templateUrl: 'list-action-button.component.html'
})
export class ListActionButtonsComponent {
  public routes = [
    {
      name: 'List overview',
      path: '/components/list/overview',
      icon: 'list',
      // tslint:disable-next-line
      summary: 'The list component displays a SKY UX-themed list of data in a consistent, flexible way.'
    },
    {
      name: 'List filters',
      path: '/components/list/filters',
      icon: 'filter',
      // tslint:disable-next-line
      summary: 'The list filters module provides components that allow users to select filter criteria.'
    },
    {
      name: 'List paging',
      path: '/components/list/paging',
      icon: 'file-o',
      // tslint:disable-next-line
      summary: 'The list paging component displays a SKY UX-themed pagination control for a list.'
    },
    {
      name: 'List toolbar',
      path: '/components/list/toolbar',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'The list toolbar component displays a SKY UX-themed toolbar for a list.'
    },
    {
      name: 'List view checklist',
      path: '/components/list/checklist',
      icon: 'list-ul',
      // tslint:disable-next-line
      summary: 'The list view checklist component builds a filterable checkbox list of data.'
    },
    {
      name: 'List view grid',
      path: '/components/list/grid',
      icon: 'table',
      // tslint:disable-next-line
      summary: 'The list view grid component provides a SKY UX-themed grid for a list of data.'
    },
    {
      name: 'List view switcher',
      path: '/components/list/view-switcher',
      icon: 'eye',
      // tslint:disable-next-line
      summary: 'The list view switcher allows users to switch between different views of the same data.'
    }
  ];
}
