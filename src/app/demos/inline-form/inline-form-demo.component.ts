import {
  Component
} from '@angular/core';

import {
  SkyInlineFormConfig,
  SkyInlineFormButtonLayout,
  SkyInlineFormCloseArgs
} from '@skyux/inline-form';

import {
  SkyInlineFormDemoTileComponent
} from './inline-form-demo-tile.component';

@Component({
  selector: 'sky-inline-form-demo',
  templateUrl: './inline-form-demo.component.html',
  styleUrls: [
    './inline-form-demo.component.scss'
  ]
})
export class SkyInlineFormDemoComponent {

  public pageTitle = 'My fundraising page';

  public showPageTitleForm = false;

  public showCustomButtonsForm = false;

  public repeaterItems: any[] = [
    {
      id: '1',
      title: '2019 Spring Gala',
      note: 'Gala for friends and family',
      fund: 'General 2019 Fund'
    },
    {
      id: '2',
      title: '2019 Special Winter Event',
      note: 'A special event',
      fund: '2019 Special Events Fund'
    },
    {
      id: '3',
      title: '2019 Donor Appreciation Event',
      note: 'Event for all donors and families',
      fund: 'General 2019 Fund'
    },
    {
      id: '4',
      title: '2020 Spring Gala',
      note: 'Gala for friends and family',
      fund: 'General 2020 Fund'
    }
  ];

  public activeInlineFormId: number;

  public editTitleConfig: SkyInlineFormConfig = {
    buttonLayout: SkyInlineFormButtonLayout.SaveCancel
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

  public dashboardConfig = {
    tiles: [
      {
        id: 'tile1',
        componentType: SkyInlineFormDemoTileComponent
      }
    ],
    layout: {
      singleColumn: {
        tiles: [
          {
            id: 'tile1',
            isCollapsed: false
          }
        ]
      },
      multiColumn: [
        {
          tiles: [
            {
              id: 'tile1',
              isCollapsed: false
            }
          ]
        }
      ]
    }
  };

  public onClosePageTitleForm(inlineFormCloseArgs: SkyInlineFormCloseArgs): void {
    console.log(inlineFormCloseArgs);

    // Form handling would go here

    this.showPageTitleForm = false;
  }

  public onCloseCustomButtonsForm(inlineFormCloseArgs: SkyInlineFormCloseArgs): void {
    console.log(inlineFormCloseArgs);

    // Form handling would go here

    this.showCustomButtonsForm = false;
  }

  public onInlineFormClose(inlineFormCloseArgs: SkyInlineFormCloseArgs): void {
    console.log(inlineFormCloseArgs);

    // Form handling would go here

    this.activeInlineFormId = undefined;
  }
}
