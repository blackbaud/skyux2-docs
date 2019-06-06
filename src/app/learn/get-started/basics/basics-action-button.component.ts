import { Component } from '@angular/core';

@Component({
  selector: 'sky-basics-action-buttons',
  templateUrl: 'basics-action-button.component.html'
})
export class BasicsActionButtonsComponent {
  public routes = [
    {
      name: 'Create a SPA',
      path: '/learn/get-started/basics/create-project',
      icon: 'plus-circle',
      // tslint:disable-next-line
      summary: 'Create a single-page application with the SKY UX template.'
    },
    {
      name: 'Serve a SPA',
      path: '/learn/get-started/basics/serve-project',
      icon: 'cog',
      // tslint:disable-next-line
      summary: 'Serve your SKY UX single-page application locally.'
    },
    {
      name: 'Run tests',
      path: '/learn/get-started/basics/run-tests',
      icon: 'tachometer',
      // tslint:disable-next-line
      summary: 'Run tests in multiple platforms and browsers.'
    },
    {
      name: 'Edit a SPA',
      path: '/learn/get-started/basics/edit-project',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'Add and edit pages and components in your SPA.'
    },
    {
      name: 'Use SKY UX modules',
      path: '/learn/get-started/basics/modules',
      icon: 'cubes',
      // tslint:disable-next-line
      summary: 'Set up SKY UX components, directives, pipes, and services.'
    },
    {
      name: 'Navigation',
      path: '/learn/get-started/basics/navigate-spa',
      icon: 'compass',
      // tslint:disable-next-line
      summary: 'Take advantage of the Angular Router class for SPA navigation.'
    },
    {
      name: 'Build and publish',
      path: '/learn/get-started/basics/build-publish',
      icon: 'cog',
      // tslint:disable-next-line
      summary: 'Build your single-page application into the dist folder.'
    },
    {
      name: 'Update CLI',
      path: '/learn/get-started/basics/update-cli',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'Get the latest version of the SKY UX CLI.'
    }
  ];
}
