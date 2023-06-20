import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-demo-page-properties',
  templateUrl: './demo-page-properties.component.html',
  styleUrls: ['./demo-page-properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyDemoPagePropertiesComponent {
  @Input()
  public sectionHeading = 'Properties';
}
