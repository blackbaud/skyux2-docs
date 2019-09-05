import { Component } from '@angular/core';

@Component({
  selector: 'sky-contribute-action-buttons',
  templateUrl: 'contribute-action-button.component.html'
})
export class ContributeActionButtonsComponent {
  public routes = [
    {
      name: 'Contribution process',
      path: '/contribute/overview',
      icon: 'file',
      summary: 'Learn how to contribute to SKY UX, and review our contribution guidelines.'
    },
    {
      name: 'Packages matrix',
      path: '/contribute/packages',
      icon: 'archive',
      summary: 'View the SKY UX packages that we use to target different areas of development.'
    }
  ];
}
