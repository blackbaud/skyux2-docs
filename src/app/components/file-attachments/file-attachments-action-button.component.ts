import { Component } from '@angular/core';

@Component({
  selector: 'sky-file-attachments-action-buttons',
  templateUrl: './file-attachments-action-button.component.html'
})
export class FileAttachmentsActionButtonsComponent {
  public routes = [
    {
      name: 'File drop',
      path: '/components/file-attachments/file-drop',
      icon: 'files-o',
      // tslint:disable-next-line
      summary: 'The list filters module provides components that allow users to select filter criteria.'
    },
    {
      name: 'Single file attachment',
      path: '/components/file-attachments/single-file-attachment',
      icon: 'file-o',
      // tslint:disable-next-line
      summary: 'The list paging component displays a SKY UX-themed pagination control for a list.'
    }
  ];
}
