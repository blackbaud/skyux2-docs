import {
  Injectable
} from '@angular/core';

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import {
  CanActivate
} from '@angular/router';

@Injectable()
export class AppRouteGuard implements CanActivate {

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    if (window.location.hostname === 'docs.blackbaud.com') {
      window.location.href = window.location.href
        .replace('docs.blackbaud.com', 'developer.blackbaud.com');
    }

    return true;
  }
}
