import { Component } from '@angular/core';

@Component({
  selector: 'sky-guideline-action-buttons',
  templateUrl: 'guideline-action-button.component.html'
})
export class GuidelineActionButtonsComponent {
  public routes = [
    {
      name: 'Buttons and links',
      path: '/design/guidelines/buttons-links',
      icon: 'link',
      // tslint:disable-next-line
      summary: 'Describes the contexts in which to use different types of buttons and hyperlinks.'
    },
    {
      name: 'Call out information',
      path: '/design/guidelines/call-out-info',
      icon: 'bullhorn',
      // tslint:disable-next-line
      summary: 'SKY UX includes several options to highlight information and draw user attention.'
    },
    {
      name: 'Content containers',
      path: '/design/guidelines/content-containers',
      icon: 'object-group',
      // tslint:disable-next-line
      summary: 'Describes the contexts in which to use different types of content containers.'
    },
    {
      name: 'Error handling',
      path: '/design/guidelines/error-handling',
      icon: 'warning',
      // tslint:disable-next-line
      summary: 'Error handling patterns provide guidance on how to present error messages.'
    },
    {
      name: 'Filter lists',
      path: '/design/guidelines/filtering-lists',
      icon: 'filter',
      // tslint:disable-next-line
      summary: 'Filter patterns provide guidance on how to display filter options in various scenarios.'
    },
    {
      name: 'Form design',
      path: '/design/guidelines/form-design',
      icon: 'clone',
      // tslint:disable-next-line
      summary: 'Form design patterns accommodate different scenarios and workflows.'
    },
    {
      name: 'Manage records',
      path: '/design/guidelines/managing-records',
      icon: 'file',
      // tslint:disable-next-line
      summary: 'Record management patterns provide guidance on how to add, edit and remove records.'
    },
    {
      name: 'Page design',
      path: '/design/guidelines/page-layouts',
      icon: 'columns',
      // tslint:disable-next-line
      summary: 'Responsive, mobile-first layouts provide flexibility and conform to SKY UX standards.'
    },
		{
      name: 'Spacing & layout',
      path: '/design/guidelines/spacing-layout',
      icon: 'th-large',
      // tslint:disable-next-line
      summary: 'Spacing guidelines facilitate a clean page layout.'
    },
    {
      name: 'User assistance',
      path: '/design/guidelines/user-assistance',
      icon: 'question-circle-o',
      // tslint:disable-next-line
      summary: 'User assistance patterns facilitate access to help documentation and other explanatory content.'
    }
  ];
}
