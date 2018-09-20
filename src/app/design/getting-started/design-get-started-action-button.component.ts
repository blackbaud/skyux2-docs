import { Component } from '@angular/core';

@Component({
  selector: 'design-get-started-action-buttons',
  templateUrl: 'design-get-started-action-button.component.html'
})
export class DesignGetStartedActionButtonsComponent {
  public routes = [
    {
      name: 'Overview',
      path: '/design/getting-started/overview',
      icon: 'sitemap',
      // tslint:disable-next-line
      summary: 'Describes the contexts in which to use different types of buttons and hyperlinks.'
    },
    {
      name: 'Principles',
      path: '/design/getting-started/principles',
      icon: 'list-ol',
      // tslint:disable-next-line
      summary: 'Guiding principles for designing with SKY UX.'
    },
		{
      name: 'Fundamental patterns',
      path: '/design/getting-started/fundamental-patterns',
      icon: 'map-o',
      // tslint:disable-next-line
      summary: 'The patterns you will use most often.'
    },
		{
      name: 'Prototyping resources',
      path: '/design/getting-started/prototyping-resources',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'Resources to help make prototyping more efficient and accurate.'
    }
  ];
}
