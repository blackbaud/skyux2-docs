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

  public repeaterItems = [
    {
      id: '1',
      title: '2018 Gala',
      note: '2018 Gala for friends and family',
      fund: 'General 2018 Fund'
    },
    {
      id: '2',
      title: '2018 Special event',
      note: 'Special event',
      fund: '2018 Special Events Fund'
    },
    {
      id: '3',
      title: '2019 Gala',
      note: '2019 Gala for friends and family',
      fund: 'General 2019 Fund'
    }
  ];

  public activeInlineFormId: number;

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

  public onInlineFormClose(inlineFormCloseArgs: SkyInlineFormCloseArgs): void {
    console.log(inlineFormCloseArgs);
    this.activeInlineFormId = undefined;

    // Form handling would go here
  }
}
