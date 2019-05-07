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

  public showEventDescriptionForm = false;

  // tslint:disable-next-line:max-line-length
  public eventDescription: string = `Spring is here, and it's time to celebrate the strawberry. Join us for the 9th annual Spring Strawberry Festival at Sunny Park with some of your favorite music and vendors. Bring the family to enjoy activities for all age groups — from face painting to strawberry eating.`;

  public onInlineFormClose(inlineFormCloseArgs: SkyInlineFormCloseArgs): void {
    console.log(inlineFormCloseArgs);

    // Form handling would go here

    this.showEventDescriptionForm = false;
  }
}
