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
  StacheNavLink,
  StacheRouteService
} from '@blackbaud/skyux-lib-stache';

import {
  SkyDocsComponentInfo,
  SkyDocsSupportalService
} from '@skyux/docs-tools';

@Injectable()
export class SkyDemoSidebarService {

  public constructor(
    private stacheRouteService: StacheRouteService,
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
      .map((components: SkyDocsComponentInfo[]) => this.transform(components));
  }

  public getRoutes(): Observable<StacheNavLink[]> {
    return this.skyDocsSupportalService
      .getComponentsInfo()
      .map((components: SkyDocsComponentInfo[]) => this.transform(components));
  }

  public getSidebar(): Observable<StacheNavLink[]> {
    const active = this.stacheRouteService.getActiveUrl();
    return this.skyDocsSupportalService
      .getComponentsInfo()
      .map((components: SkyDocsComponentInfo[]) => this.transform(components, active))
      .map((routes: StacheNavLink[]) => {
        const sidebar = this.getDefaultSidebar();
        sidebar[0].children = routes;
        return sidebar;
      });
  }

  // Keeps the default stache sidebar from loading
  public getDefaultSidebar(): StacheNavLink[] {
    return [
      {
        name: 'Components',
        path: '/'
      }
    ];
  }

  private transform(components: SkyDocsComponentInfo[], active?: string): StacheNavLink[] {
    return components.map((component: SkyDocsComponentInfo) => {

      // Make links relative if possible so Stache will use RouterLink
      const url = component.url.replace('https://developer.blackbaud.com/skyux/', '/');

      // Also having to manually set isActive for Stache race condition
      const link: StacheNavLink = {
        path: url,
        name: component.name,
        icon: component.icon,
        summary: component.summary
      };

      if (active) {
        link.isActive = this.isActive(active, { path: url });
        link.isCurrent = this.isCurrent(active, { path: url });
      }

      if (component.children) {
        link.children = this.transform(component.children, active);
      }

      return link;
    });
  }

  // These two methods are lifted from:
  // https://github.com/blackbaud/stache2/blob/src/app/public/src/modules/nav/nav.component.ts#L51-L79
  private isActive(activeUrl: string, route: any): boolean {
    let path = route.path;
    let navDepth: number;

    if (path.join) {
      navDepth = path.length;
      path = path.join('/');
    } else {
      navDepth = path.split('/').length;
    }

    if (path.indexOf('/') !== 0) {
      path = `/${path}`;
    }

    const isActiveParent = (navDepth > 1 && `${activeUrl}/`.indexOf(`${path}/`) === 0);
    return (isActiveParent || activeUrl === path);
  }

  private isCurrent(activeUrl: string, route: any): boolean {
    let path = route.path;

    if (path.join) {
      path = path.join('/');
    }

    return (activeUrl === `${path}`);
  }
}
