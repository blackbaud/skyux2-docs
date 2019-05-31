import { Component } from '@angular/core';

@Component({
  selector: 'sky-advanced-action-buttons',
  templateUrl: 'advanced-action-button.component.html'
})
export class AdvancedActionButtonsComponent {
  public routes = [
    {
      name: 'Accessibility tests',
      path: '/learn/get-started/advanced/accessibility-unit-tests',
      icon: 'tachometer',
      // tslint:disable-next-line
      summary: 'Run aXe automated accessibility tests in your unit tests.'
    },
    {
      name: 'Accessibility analyzer',
      path: '/learn/get-started/advanced/',
      icon: 'tachometer',
      // tslint:disable-next-line
      summary: 'Run aXe automated accessibility tests in your e2e tests.'
    },
    {
      name: 'Child routes',
      path: '/learn/get-started/advanced/child-routes',
      icon: 'compass',
      // tslint:disable-next-line
      summary: 'Use child routes to extend the paths of parent routes.'
    },
    {
      name: 'Edit a SPA',
      path: '/learn/get-started/advanced/',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'Add and edit pages and components in your SPA.'
    },
    {
      name: 'Use SKY UX modules',
      path: '/learn/get-started/advanced/',
      icon: 'cubes',
      // tslint:disable-next-line
      summary: 'Set up SKY UX components, directives, pipes, and services.'
    },
    {
      name: 'Navigation',
      path: '/learn/get-started/advanced/',
      icon: 'compass',
      // tslint:disable-next-line
      summary: 'Take advantage of the Angular Router class for SPA navigation.'
    },
    {
      name: 'Build and publish',
      path: '/learn/get-started/advanced/',
      icon: 'cog',
      // tslint:disable-next-line
      summary: 'Build your single-page application into the dist folder.'
    },
    {
      name: 'Navigation',
      path: '/learn/get-started/advanced/',
      icon: 'compass',
      // tslint:disable-next-line
      summary: 'Take advantage of the Angular Router class for SPA navigation.'
    },
    {
      name: 'Build and publish',
      path: '/learn/get-started/advanced/',
      icon: 'cog',
      // tslint:disable-next-line
      summary: 'Build your single-page application into the dist folder.'
    },
    {
      name: 'Navigation',
      path: '/learn/get-started/advanced/',
      icon: 'compass',
      // tslint:disable-next-line
      summary: 'Take advantage of the Angular Router class for SPA navigation.'
    },
    {
      name: 'Build and publish',
      path: '/learn/get-started/advanced/',
      icon: 'cog',
      // tslint:disable-next-line
      summary: 'Build your single-page application into the dist folder.'
    },
    {
      name: 'Build and publish',
      path: '/learn/get-started/advanced/',
      icon: 'cog',
      // tslint:disable-next-line
      summary: 'Build your single-page application into the dist folder.'
    },
    {
      name: 'Update CLI',
      path: '/learn/get-started/advanced/',
      icon: 'wrench',
      // tslint:disable-next-line
      summary: 'Get the latest version of the SKY UX CLI.'
    }
  ];
}
