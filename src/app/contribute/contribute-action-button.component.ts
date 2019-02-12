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
      summary: 'View our guidelines for how to contribute to SKY UX.'
    },
    {
      name: 'Packages',
      path: '/contribute/packages',
      icon: 'file',
      summary: 'View the packages for different areas of development.'
    }
  ];
}
