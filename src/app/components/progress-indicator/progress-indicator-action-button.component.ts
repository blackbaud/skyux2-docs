import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';

import {
  StacheNavLink
} from '@blackbaud/skyux-lib-stache';

import {
  SkyDemoSidebarService
} from '../../shared/sidebar.service';

@Component({
  selector: 'sky-progress-indicator-action-buttons',
  templateUrl: 'progress-indicator-action-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressIndicatorActionButtonsComponent {
  public sidebarRoutes: StacheNavLink[];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private sidebarService: SkyDemoSidebarService
  ) {
    this.sidebarRoutes = this.sidebarService.getDefaultSidebar();
    this.sidebarService
      .getSidebar()
      .subscribe((routes: StacheNavLink[]) => {
        this.sidebarRoutes = routes;
        this.changeDetectorRef.markForCheck();
      });
  }
}
