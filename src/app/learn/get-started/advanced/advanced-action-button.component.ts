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
      path: '/learn/get-started/advanced/accessibility-analyzer',
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
      name: 'Entry components',
      path: '/learn/get-started/advanced/add-entry-components',
      icon: 'cubes',
      // tslint:disable-next-line
      summary: 'Declare entry components to generate them dynamically.'
    },
    {
      name: 'Localization',
      path: '/learn/get-started/advanced/localization',
      icon: 'globe',
      // tslint:disable-next-line
      summary: 'Use SKY UX Builder methods for localization.'
    },
    {
      name: 'Module-level providers',
      path: '/learn/get-started/advanced/module-level-providers',
      icon: 'cubes',
      // tslint:disable-next-line
      summary: 'Import providers and services to supplement SKY UX.'
    },
    {
      name: 'Pact testing',
      path: '/learn/get-started/advanced/pact-tests',
      icon: 'tachometer',
      // tslint:disable-next-line
      summary: 'Test dependent systems where integration is based on HTTP.'
    },
    {
      name: 'Route guards',
      path: '/learn/get-started/advanced/route-guards',
      icon: 'compass',
      // tslint:disable-next-line
      summary: 'Enable or disable the rendering of routes at runtime.'
    },
    {
      name: 'Route parameters',
      path: '/learn/get-started/advanced/route-params',
      icon: 'compass',
      // tslint:disable-next-line
      summary: 'Use Angular route parameters to use variables in your routes.'
    },
    {
      name: 'Route wildcards',
      path: '/learn/get-started/advanced/route-wildcard',
      icon: 'compass',
      // tslint:disable-next-line
      summary: 'Gracefully handle requests to unknown routes in a SPA.'
    },
    {
      name: 'Static assets',
      path: '/learn/get-started/advanced/include-static-assets',
      icon: 'cubes',
      // tslint:disable-next-line
      summary: 'Reference static assets in your HTML, CSS, or SCSS.'
    },
    {
      name: 'Sticky settings',
      path: '/learn/get-started/advanced/sticky-settings',
      icon: 'cubes',
      // tslint:disable-next-line
      summary: 'Save settings for users across sessions.'
    },
    {
      name: 'Unit tests for modals',
      path: '/learn/get-started/advanced/unit-test-modals',
      icon: 'tachometer',
      // tslint:disable-next-line
      summary: 'Create unit tests for the modals in your single-page application.'
    }
  ];
}
