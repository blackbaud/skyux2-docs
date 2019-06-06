import { Component } from '@angular/core';

@Component({
  selector: 'sky-prereqs-action-buttons',
  templateUrl: 'prereqs-action-button.component.html'
})
export class PrereqsActionButtonsComponent {
  public routes = [
    {
      name: 'SSL certificate',
      path: '/learn/get-started/prereqs/ssl-certificate',
      icon: 'file',
      // tslint:disable-next-line
      summary: 'Install the skyux-ca.crt root certificate to load your SPA into SKY UX Host.'
    },
    {
      name: 'Initial setup',
      path: '/learn/get-started/prereqs/initial-setup',
      icon: 'compass',
      // tslint:disable-next-line
      summary: 'Set up prerequisites to get your developer machine ready for SKY UX.'
    }
  ];
}
