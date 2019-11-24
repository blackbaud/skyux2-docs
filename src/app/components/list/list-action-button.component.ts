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
  selector: 'sky-list-action-buttons',
  templateUrl: 'list-action-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListActionButtonsComponent {
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
