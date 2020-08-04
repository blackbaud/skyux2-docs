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

  /**
   * Gets the children for a specificed route
   * @param name Name of route to match
   */
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

  /**
   * Gets all routes.
   */
  public getRoutes(): Observable<StacheNavLink[]> {
    return this.skyDocsSupportalService
      .getComponentsInfo()
      .map((components: SkyDocsComponentInfo[]) => this.transform(components));
  }

  /**
   * Gets all routes and adds "Components" parent.
   */
  public getSidebar(): Observable<StacheNavLink[]> {
    return this.skyDocsSupportalService
      .getComponentsInfo()
      .map((components: SkyDocsComponentInfo[]) => this.transform(components))
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

  /**
   * Transforms an array of SkyDocsComponentInfo to an array of StacheNavLink.
   * Recursively transforms any children.
   * @param components Array of SkyDocsComponentInfo to transform.
   */
  private transform(components: SkyDocsComponentInfo[]): StacheNavLink[] {
    return components.map((component: SkyDocsComponentInfo) => {

      // Make links relative if possible so Stache will use RouterLink
      const url = component.url.replace('https://developer.blackbaud.com/skyux/', '');

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
