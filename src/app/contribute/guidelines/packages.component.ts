import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {

  // "id" is required for sky-grid
  public skyuxPackages = [
    {
      id: '@skyux/animations',
      provider: 'github',
      repo: 'blackbaud/skyux-animations'
    },
    {
      id: '@skyux/avatar',
      provider: 'github',
      repo: 'blackbaud/skyux-avatar'
    },
    {
      id: '@skyux/colorpicker',
      provider: 'github',
      repo: 'blackbaud/skyux-colorpicker'
    },
    {
      id: '@skyux/core',
      provider: 'github',
      repo: 'blackbaud/skyux-core'
    },
    {
      id: '@skyux/datetime',
      provider: 'github',
      repo: 'blackbaud/skyux-datetime'
    },
    {
      id: '@skyux/errors',
      provider: 'github',
      repo: 'blackbaud/skyux-errors'
    },
    {
      id: '@skyux/flyout',
      provider: 'github',
      repo: 'blackbaud/skyux-flyout'
    },
    {
      id: '@skyux/forms',
      provider: 'github',
      repo: 'blackbaud/skyux-forms'
    },
    {
      id: '@skyux/grids',
      provider: 'github',
      repo: 'blackbaud/skyux-grids'
    },
    {
      id: '@skyux/indicators',
      provider: 'github',
      repo: 'blackbaud/skyux-indicators'
    },
    {
      id: '@skyux/layout',
      provider: 'github',
      repo: 'blackbaud/skyux-layout'
    },
    {
      id: '@skyux/link-records',
      provider: 'github',
      repo: 'blackbaud/skyux-link-records'
    },
    {
      id: '@skyux/list-builder',
      provider: 'github',
      repo: 'blackbaud/skyux-list-builder'
    },
    {
      id: '@skyux/lists',
      provider: 'github',
      repo: 'blackbaud/skyux-lists'
    },
    {
      id: '@skyux/lookup',
      provider: 'github',
      repo: 'blackbaud/skyux-lookup'
    },
    {
      id: '@skyux/modals',
      provider: 'github',
      repo: 'blackbaud/skyux-modals'
    },
    {
      id: '@skyux/popovers',
      provider: 'github',
      repo: 'blackbaud/skyux-popovers'
    },
    {
      id: '@skyux/select-field',
      provider: 'github',
      repo: 'blackbaud/skyux-select-fields'
    },
    {
      id: '@skyux/tabs',
      provider: 'github',
      repo: 'blackbaud/skyux-tabs'
    },
    {
      id: '@skyux/theme',
      provider: 'github',
      repo: 'blackbaud/skyux-theme'
    },
    {
      id: '@skyux/tiles',
      provider: 'github',
      repo: 'blackbaud/skyux-tiles'
    },
    {
      id: '@skyux/validation',
      provider: 'github',
      repo: 'blackbaud/skyux-validation'
    },
    {
      id: '@skyux/toast',
      provider: 'github',
      repo: 'blackbaud/skyux-toast'
    }
  ];

  public sdkPackages = [
    {
      id: '@skyux-sdk/builder',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-builder'
    },
    {
      id: '@skyux-sdk/runtime',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-runtime'
    }
  ];

  public blackbaudPackages = [
    {
      id: '@blackbaud/skyux',
      provider: 'github',
      repo: 'blackbaud/skyux2'
    },
    {
      id: '@blackbaud/skyux-builder',
      provider: 'github',
      repo: 'blackbaud/skyux-builder'
    }
  ];

  constructor() {
    this.addProviderUrl(this.blackbaudPackages);
    this.addProviderUrl(this.skyuxPackages);
    this.addProviderUrl(this.sdkPackages);
  }

  private addProviderUrl(packages: any) {
    packages.forEach((pkg: any) => {
      if (pkg.provider === 'github') {
        pkg.repoUrl = 'https://github.com/' + pkg.repo;
      }
    });
  }
}
