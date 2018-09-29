import { Component } from '@angular/core';

@Component({
  selector: 'sky-contribute-action-buttons',
  templateUrl: 'contribute-action-button.component.html'
})
export class ContributeActionButtonsComponent {
  public routes = [
    {
      name: 'Contributors',
      path: '/contribute/contributors',
      icon: 'address-card',
      summary: 'View SKY UX team members as well as key contributors.'
    },
    {
      name: 'Guidelines',
      path: '/contribute/guidelines',
      icon: 'file',
      summary: 'View our contribution guidelines.'
    },
    {
      name: 'Organization',
      path: '/contribute/organizsation',
      icon: 'file',
      summary: 'View our package organization.'
    }
  ];
}
