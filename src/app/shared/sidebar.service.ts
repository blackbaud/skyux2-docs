/**
 * This service lightly wraps the SkyDocsSupportalService.
 * It attepts to keep URLS relative so Stache uses RouterLink.
 * It's used in three places:
 *  - On the components landing page.
 *  - On the landing pages of nested components, like List and File Attachment.
 *  - On the individual component pages using the old style.
 *  - On the individual component pages using the new "tabbed" style.
 */
import {
  Injectable
} from '@angular/core';

import {
  StacheNavLink
} from '@blackbaud/skyux-lib-stache';

import {
  SkyDocsComponentInfo,
  SkyDocsSupportalService
} from '@skyux/docs-tools';

import {
  Observable
} from 'rxjs';

import {
  map,
  share
} from 'rxjs/operators';

@Injectable()
export class SkyDemoSidebarService {

  public constructor(
    private skyDocsSupportalService: SkyDocsSupportalService
  ) { }

  /**
   * Gets the children for a specificed route
   * @param name Name of route to match
   */
  public getRoutesFor(name: string): Observable<StacheNavLink[]> {
    const nameUpperCase = name.toUpperCase();

    return this.skyDocsSupportalService
      .getComponentsInfo()
      .pipe(
        map(components => {
          const match = components.find(c => c.name.toUpperCase() === nameUpperCase);
          return (match && match.children) ? match.children : [];
        }),
        map(components => this.transform(components)),
        share()
      );
  }

  /**
   * Gets all routes.
   */
  public getRoutes(): Observable<StacheNavLink[]> {
    return this.skyDocsSupportalService
      .getComponentsInfo()
      .pipe(
        map(components => this.transform(components)),
        share()
      );
  }

  /**
   * Gets all routes and adds "Components" parent.
   */
  public getSidebar(): Observable<StacheNavLink[]> {
    return this.skyDocsSupportalService
      .getComponentsInfo()
      .pipe(
        map(components => this.transform(components)),
        map(routes => {
          const sidebar = this.getDefaultSidebar();
          sidebar[0].children = routes;
          return sidebar;
        }),
        share()
      );
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

  /**
   * Transforms an array of SkyDocsComponentInfo to an array of StacheNavLink.
   * Recursively transforms any children.
   * @param components Array of SkyDocsComponentInfo to transform.
   */
  private transform(components: SkyDocsComponentInfo[]): StacheNavLink[] {
    return components.map((component: SkyDocsComponentInfo) => {

      // Make links relative so Stache will use RouterLink
      // Remove URL params, as they only contain svcid params which are automatically handled by the nav service.
      let url = component.url;
      if (url.indexOf('https://developer.blackbaud.com/skyux/') === 0) {
        url = component.url.replace('https://developer.blackbaud.com/skyux/', '').split('?')[0];
      }

      // Also having to manually set isActive for Stache race condition
      const link: StacheNavLink = {
        path: url,
        name: component.name,
        icon: component.icon,
        summary: component.summary,
        restricted: component.restricted
      };

      if (component.children) {
        link.children = this.transform(component.children);
      }

      return link;
    });
  }
}
