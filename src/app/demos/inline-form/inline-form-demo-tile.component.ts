import {
  Component
} from '@angular/core';

import {
  SkyInlineFormCloseArgs
} from '@skyux/inline-form';

@Component({
  templateUrl: './inline-form-demo-tile.component.html'
})
export class SkyInlineFormDemoTileComponent {

  public activeItemId: string;

  public tileData: any[] = [
    { id: '1', title: '2018 Spring gala ', note: 'Gala for friends and family' },
    { id: '2', title: '2018 Special winter event ', note: 'A special event' },
    { id: '3', title: '2018 Donor appreciation event', note: 'All donors and families invited' }
  ];

  public onInlineFormClose(inlineFormCloseArgs: SkyInlineFormCloseArgs): void {
    console.log(inlineFormCloseArgs);

    // Form handling would go here

    this.activeItemId = undefined;
  }
}
