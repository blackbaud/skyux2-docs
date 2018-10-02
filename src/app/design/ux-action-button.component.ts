import { Component } from '@angular/core';

@Component({
  selector: 'sky-ux-action-buttons',
  templateUrl: 'ux-action-button.component.html'
})
export class DesignActionButtonsComponent {
  public routes = [
    {
      name: 'Getting started',
      path: '/design/get-started/',
      icon: 'play',
      // tslint:disable-next-line
      summary: 'Quickly get up to speed on designing with SKY UX.'
    },
		{
      name: 'Design principles',
      path: '/design/principles/',
      icon: 'list-ol',
      // tslint:disable-next-line
      summary: 'High level design principles for designing with SKY UX.'
    },
    {
      name: 'Guidelines',
      path: '/design/guidelines',
      icon: 'map-o',
      // tslint:disable-next-line
      summary: 'Instructions on how to consistently design for specific scenarios.'
    },
		{
      name: 'Tutorials',
      path: '/design/tutorials',
      icon: 'graduation-cap',
      // tslint:disable-next-line
      summary: 'Tutorials walking through design decisions for example applications.'
    },
		{
      name: 'Prototyping resources',
      path: '/design/prototyping-resources/',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'Tools to quickly build prototypes using SKY UX components and patterns.'
    }
  ];
}
