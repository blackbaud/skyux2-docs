import {
  Component
} from '@angular/core';

import {
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'sky-ux-styles-typography',
  templateUrl: './ux-styles-typography.component.html',
  styleUrls: ['./ux-styles-typography.component.scss']
})
export class UxStylesTypographyComponent {
  public themeSettings: SkyThemeSettings;

  public themeSettingsChange(themeSettings: SkyThemeSettings): void {
    this.themeSettings = themeSettings;
  }
}
