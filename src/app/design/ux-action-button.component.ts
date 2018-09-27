import { Component } from '@angular/core';

@Component({
  selector: 'sky-ux-action-buttons',
  templateUrl: 'ux-action-button.component.html'
})
export class DesignActionButtonsComponent {
  public routes = [
    {
      name: 'Getting started',
      path: '/design/getting-started/',
      icon: 'play',
      // tslint:disable-next-line
      summary: 'Quickly get up to speed on the fundamentals of designing with SKY UX.'
    },
    {
      name: 'Guidelines',
      path: '/design/guidelines',
      icon: 'map-o',
      // tslint:disable-next-line
      summary: 'Instructions on how to consistently design for specific scenarios.'
    }
  ];
}
