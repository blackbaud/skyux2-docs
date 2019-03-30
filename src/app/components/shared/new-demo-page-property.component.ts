import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'new-sky-demo-page-property',
  templateUrl: './new-demo-page-property.component.html',
  styleUrls: ['./new-demo-page-property.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewSkyDemoPagePropertyComponent {
  @Input()
  public propertyName: string;

  @Input()
  public defaultValue: string;

  @Input()
  public isOptional = false;
}
