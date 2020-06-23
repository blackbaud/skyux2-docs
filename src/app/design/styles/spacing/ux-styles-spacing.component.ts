import {
  Component
} from '@angular/core';

import {
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'sky-ux-styles-spacing',
  templateUrl: './ux-styles-spacing.component.html',
  styleUrls: ['./ux-styles-spacing.component.scss']
})
export class UxStylesSpacingComponent {
  public themeSettings: SkyThemeSettings;

  public themeSettingsChange(themeSettings: SkyThemeSettings): void {
    this.themeSettings = themeSettings;
  }
}
