import { Component } from '@angular/core';

@Component({
  selector: 'sky-ux-action-buttons',
  templateUrl: 'ux-action-button.component.html'
})
export class DesignActionButtonsComponent {
  public routes = [
    {
      name: 'Principles',
      path: '/design/principles',
      icon: 'list-ol',
      // tslint:disable-next-line
      summary: 'Instructions on how to consistently design for specific scenarios.'
    },
		{
      name: 'Guidelines',
      path: '/design/guidelines',
      icon: 'map-o',
      // tslint:disable-next-line
      summary: 'Instructions on how to consistently design for specific scenarios.'
    },
    {
      name: 'Styles',
      path: '/design/styles',
      icon: 'paint-brush',
      // tslint:disable-next-line
      summary: 'Core design elements that provide the building blocks for SKY UX components.'
    },
    {
      name: 'Resources',
      path: '/design/resources',
      icon: 'file-o',
      // tslint:disable-next-line
      summary: 'Design resources to help make prototyping more efficient and accurate.'
    }
  ];
}
