import { Component } from '@angular/core';

@Component({
  selector: 'sky-reference-action-buttons',
  templateUrl: 'reference-action-button.component.html'
})
export class ReferenceActionButtonsComponent {
  public routes = [
    {
      name: 'SKY UX CLI',
      path: '/learn/reference/cli-commands',
      icon: 'code',
      summary: 'Commands and options to create and manage SPAs.'
    },
    {
      name: 'Configuration',
      path: '/learn/reference/configuration',
      icon: 'cubes',
      summary: 'Configuration options provided by the SKY UX template.'
    },
    {
      name: 'Extensibility',
      path: '/learn/reference/extensibility',
      icon: 'building',
      summary: 'Extensibility information for the SKY UX SDK.'
    },
    {
      name: 'File conventions',
      path: '/learn/reference/naming-and-placement',
      icon: 'file',
      summary: 'Guidance on how to name files and where to place them.'
    },
    {
      name: 'Template items',
      path: '/learn/reference/template-items',
      icon: 'file-text',
      summary: 'Default items that the SKY UX template provides for SPAs.'
    },
    {
      name: 'Tests',
      path: '/learn/reference/tests',
      icon: 'tachometer',
      summary: 'Guidance on unit tests and end-to-end tests in SKY UX SPAs.'
    },
    {
      name: 'Libraries',
      path: '/learn/reference/component-libraries',
      icon: 'book',
      summary: 'Create reusable libraries of SKY UX components and services.'
    },
    {
      name: 'Helpers',
      path: '/learn/reference/helpers',
      icon: 'wrench',
      summary: 'SKY UX helper for making authenticated HTTP requests.'
    },
    {
      name: 'FAQ',
      path: '/learn/reference/faq',
      icon: 'question-circle-o',
      summary: 'The FAQ addresses frequently asked questions about SKY UX.'
    },
    {
      name: 'Resources',
      path: '/learn/reference/resources',
      icon: 'search',
      summary: 'Helpful tips on the tools and technologies that SKY UX uses.'
    }
  ];
}
