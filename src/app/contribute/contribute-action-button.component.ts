import { Component } from '@angular/core';

@Component({
  selector: 'sky-contribute-action-buttons',
  templateUrl: 'contribute-action-button.component.html'
})
export class ContributeActionButtonsComponent {
  public routes = [
    {
      name: 'Overview',
      path: '/contribute/overview',
      icon: 'file',
      summary: 'An overview of contributing to SKY UX.'
    },
    {
      name: 'Packages',
      path: '/contribute/packages',
      icon: 'archive',
      summary: 'View our package organization.'
    }
  ];
}
