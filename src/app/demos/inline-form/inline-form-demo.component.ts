import {
  Component
} from '@angular/core';

import {
  SkyInlineFormConfig,
  SkyInlineFormButtonLayout,
  SkyInlineFormCloseArgs
} from '@skyux/inline-form';

@Component({
  selector: 'sky-inline-form-demo',
  templateUrl: './inline-form-demo.component.html',
  styleUrls: [
    './inline-form-demo.component.scss'
  ]
})
export class SkyInlineFormDemoComponent {

  public activeId: string = undefined;

  public pageTitle = 'My fundraising page';

  public showPageTitleForm = false;

  public myData: any = [
    { id: '1', name: 'Target', amount: '$500.00' },
    { id: '2', name: 'Raised', amount: '$25.00' }
  ];

  public editConfig: SkyInlineFormConfig = {
    buttonLayout: SkyInlineFormButtonLayout.SaveDeleteCancel
  };

  public customConfig: SkyInlineFormConfig = {
    buttonLayout: SkyInlineFormButtonLayout.Custom,
    buttons: [
      { action: 'save', text: 'Save', styleType: 'primary' },
      { action: 'delete', text: 'Delete', styleType: 'default' },
      { action: 'reset', text: 'Reset', styleType: 'default' },
      { action: 'cancel', text: 'Cancel', styleType: 'link' }
    ]
  };

  public showForm = false;

  public onClose(event: any): void {
    this.activeId = undefined;
    console.log(event);
  }

  public onClosePageTitleForm(event: SkyInlineFormCloseArgs): void {
    this.showPageTitleForm = false;
    console.log(event);
  }
}
