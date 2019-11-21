/**
 * This service lightly wraps the SkyDocsSupportalService.
 * It attepts to keep URLS relative so Stache uses RouterLink.
 * It's used in three places:
 *  - On the components landing page.
 *  - On the individual component pages using the old style.
 *  - On the individual component pages using the new "tabbed" style.
 */
import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs';

import 'rxjs/operators/map';

import {
  StacheNavLink
} from '@blackbaud/skyux-lib-stache';

import {
  SkyDocsComponentInfo,
  SkyDocsSupportalService
} from '@skyux/docs-tools';

@Injectable()
export class SkyDemoSidebarService {

  public constructor(
    private skyDocsSupportalService: SkyDocsSupportalService
  ) { }

  public getRoutesFor(name: string): Observable<StacheNavLink[]> {
    const nameUpperCase = name.toUpperCase();

    return this.skyDocsSupportalService
      .getComponentsInfo()
      .map((components: SkyDocsComponentInfo[]) => {
        const match = components.find((component: SkyDocsComponentInfo) =>
          component.name.toUpperCase() === nameUpperCase);
        return match && match.children ? match.children : [];
      })
      .map(this.transform);
  }

  public getRoutes(): Observable<StacheNavLink[]> {
    return this.skyDocsSupportalService
      .getComponentsInfo()
      .map(this.transform);
  }

  public getSidebar(): Observable<StacheNavLink[]> {
    return this.skyDocsSupportalService
      .getComponentsInfo()
      .map(this.transform)
      .map((routes: StacheNavLink[]) => (
        [
          {
            name: 'Components',
            path: '/',
            children: routes
          }
        ]
      ));
  }

  // Make links relative if possible so Stache will use RouterLink
  private transform(components: SkyDocsComponentInfo[]): StacheNavLink[] {
    return components.map((component: SkyDocsComponentInfo) => ({
      path: [component.url.replace('https://developer.blackbaud.com/skyux/', '/')],
      name: component.name,
      icon: component.icon,
      summary: component.summary
    }));
  }
}
