import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

import {
  SkyWaitService
} from '@skyux/indicators';

import {
  StacheNavLink
} from '@blackbaud/skyux-lib-stache';

import {
  SkyDemoSidebarService
} from '../../shared/sidebar.service';

@Component({
  selector: 'sky-demo-page-action-buttons',
  templateUrl: 'demo-page-action-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoPageActionButtons implements OnInit {
  public routes: StacheNavLink[];

  @Input()
  public item: string;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private skyWaitService: SkyWaitService,
    private sidebarService: SkyDemoSidebarService
  ) { }

  public ngOnInit() {
    const obsRoutes = this.item
      ? this.sidebarService.getRoutesFor(this.item)
      : this.sidebarService.getRoutes();

    this.skyWaitService
      .blockingWrap(obsRoutes)
      .subscribe((routes: StacheNavLink[]) => {
        this.routes = routes;
        this.changeDetector.markForCheck();
      });
  }
}
