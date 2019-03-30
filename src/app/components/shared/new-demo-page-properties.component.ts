import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'new-sky-demo-page-properties',
  templateUrl: './new-demo-page-properties.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewSkyDemoPagePropertiesComponent {
  @Input()
  public sectionHeading = 'Properties';
}
