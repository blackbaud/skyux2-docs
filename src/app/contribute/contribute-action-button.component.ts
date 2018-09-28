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
      // tslint:disable-next-line
      summary: 'View SKY UX team members as well as key contributors.'
    },
    {
      name: 'Guidelines',
      path: '/contribute/guidelines',
      icon: 'file',
      // tslint:disable-next-line
      summary: 'See how our packages are organized and our guidelines for contributing to them.'
    }
  ];
}
