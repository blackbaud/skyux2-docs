import { Component } from '@angular/core';

@Component({
  selector: 'sky-guideline-action-buttons',
  templateUrl: 'guideline-action-button.component.html'
})
export class GuidelineActionButtonsComponent {
  public routes = [
    {
      name: 'Page layout',
      path: '/design/guidelines/page-layouts',
      icon: 'columns',
      // tslint:disable-next-line
      summary: 'Responsive, mobile-first layouts provide flexibility and conform to SKY UX standards.'
    },
    {
      name: 'Content layout',
      path: '/design/guidelines/content-layouts',
      icon: 'columns',
      // tslint:disable-next-line
      summary: 'Responsive, mobile-first layouts provide flexibility and conform to SKY UX standards.'
    },
		{
      name: 'Visual design',
      path: '/design/guidelines/visual-design',
      icon: 'paint-brush',
      // tslint:disable-next-line
      summary: 'Visual language used in SKY UX'
    },
		{
      name: 'Interactions & workflows',
      path: '/design/guidelines/interactions-workflows',
      icon: 'bolt',
      // tslint:disable-next-line
      summary: 'Common interactions & workflows'
    }
  ];
}
