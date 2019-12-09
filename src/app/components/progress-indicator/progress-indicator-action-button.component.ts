import { Component } from '@angular/core';

@Component({
  selector: 'sky-progress-indicator-action-buttons',
  templateUrl: './progress-indicator-action-button.component.html'
})
export class ProgressIndicatorActionButtonsComponent {
  public routes = [
    {
      name: 'Passive indicator',
      path: '/components/progress-indicator/passive-progress-indicator',
      icon: 'tasks',
      // tslint:disable-next-line
      summary: 'The passive indicator represents steps outside of user control.'
    },
    {
      name: 'Waterfall page',
      path: '/components/progress-indicator/waterfall-progress-indicator',
      icon: 'tasks',
      // tslint:disable-next-line
      summary: 'The waterfall indicator walks users through discrete steps on a page.'
    },
    {
      name: 'Wizard',
      path: '/components/wizard',
      icon: 'magic',
      // tslint:disable-next-line
      summary: 'The wizard walks users through discrete steps in a modal.'
    }
  ];
}
