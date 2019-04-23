import {
  Component
} from '@angular/core';

@Component({
  templateUrl: './inline-form-demo-tile.component.html'
})
export class SkyInlineFormDemoTileComponent {
  public activeItemId: string;
  public tileData = [
    { id: '1', title: '2018 Spring gala ', note: 'Gala for friends and family' },
    { id: '2', title: '2018 Special winter event ', note: 'A special event' },
    { id: '3', title: '2018 Donor appreciation event', note: 'All donors and families invited' }
  ];

  public onInlineFormClose(event: any): void {
    this.activeItemId = undefined;
    console.log(event);
  }
}
