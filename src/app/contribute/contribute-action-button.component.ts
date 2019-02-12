import { Component } from '@angular/core';

@Component({
  selector: 'sky-contribute-action-buttons',
  templateUrl: 'contribute-action-button.component.html'
})
export class ContributeActionButtonsComponent {
  public routes = [
    {
      name: 'Guidelines',
      path: '/contribute/guidelines',
      icon: 'file',
      summary: 'View our contribution guidelines.'
    },
    {
      name: 'Packages',
      path: '/contribute/packages',
      icon: 'archive',
      summary: 'View our package organization.'
    }
  ];
}
