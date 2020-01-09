import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'sky-demo-components',
  templateUrl: './demo-components.component.html',
  styleUrls: ['./demo-components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyDemoComponentsComponent { }
