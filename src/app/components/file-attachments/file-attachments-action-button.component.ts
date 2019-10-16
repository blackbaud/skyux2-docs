import { Component } from '@angular/core';

@Component({
  selector: 'sky-file-attachments-action-buttons',
  templateUrl: './file-attachments-action-button.component.html'
})
export class FileAttachmentsActionButtonsComponent {
  public routes = [
    {
      name: 'File attachment',
      path: '/components/file-attachments/file-attachment',
      icon: 'files-o',
      // tslint:disable-next-line
      summary: 'The file attachment module creates an element to attach multiple local or external files.'
    },
    {
      name: 'Single file attachment',
      path: '/components/file-attachments/single-file-attachment',
      icon: 'file-o',
      // tslint:disable-next-line
      summary: 'The single file attachment component creates an input to attach a single local file.'
    }
  ];
}
