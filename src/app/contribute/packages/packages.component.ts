import {
  Component
} from '@angular/core';

export function sortById(a: any, b: any): any {
  const keyA = a.id;
  const keyB = b.id;

  if (keyA < keyB) {
    return -1;
  }

  if (keyA > keyB) {
    return 1;
  }

  return 0;
}

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {

  // "id" is required for sky-grid
  public skyuxPackages = [
    {
      id: '@skyux/a11y',
      provider: 'github',
      repo: 'blackbaud/skyux-a11y'
    },
    {
      id: '@skyux/action-bars',
      provider: 'github',
      repo: 'blackbaud/skyux-action-bars'
    },
    {
      id: '@skyux/ag-grid',
      provider: 'github',
      repo: 'blackbaud/skyux-ag-grid'
    },
    {
      id: '@skyux/angular-tree-component',
      provider: 'github',
      repo: 'blackbaud/skyux-angular-tree-component'
    },
    {
      id: '@skyux/animations',
      provider: 'github',
      repo: 'blackbaud/skyux-animations'
    },
    {
      id: '@skyux/assets',
      provider: 'github',
      repo: 'blackbaud/skyux-assets'
    },
    {
      id: '@skyux/auth-client-factory',
      provider: 'github',
      repo: 'blackbaud/skyux-auth-client-factory'
    },
    {
      id: '@skyux/autonumeric',
      provider: 'github',
      repo: 'blackbaud/skyux-autonumeric'
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
      id: '@skyux/config',
      provider: 'github',
      repo: 'blackbaud/skyux-config'
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
      id: '@skyux/docs-tools',
      provider: 'github',
      repo: 'blackbaud/skyux-docs-tools'
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
      id: '@skyux/http',
      provider: 'github',
      repo: 'blackbaud/skyux-http'
    },
    {
      id: '@skyux/i18n',
      provider: 'github',
      repo: 'blackbaud/skyux-i18n'
    },
    {
      id: '@skyux/indicators',
      provider: 'github',
      repo: 'blackbaud/skyux-indicators'
    },
    {
      id: '@skyux/inline-form',
      provider: 'github',
      repo: 'blackbaud/skyux-inline-form'
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
      id: '@skyux/list-builder-common',
      provider: 'github',
      repo: 'blackbaud/skyux-list-builder-common'
    },
    {
      id: '@skyux/list-builder-view-checklist',
      provider: 'github',
      repo: 'blackbaud/skyux-list-builder-view-checklist'
    },
    {
      id: '@skyux/list-builder-view-grids',
      provider: 'github',
      repo: 'blackbaud/skyux-list-builder-view-grids'
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
      id: '@skyux/omnibar-interop',
      provider: 'github',
      repo: 'blackbaud/skyux-omnibar-interop'
    },
    {
      id: '@skyux/phone-field',
      provider: 'github',
      repo: 'blackbaud/skyux-phone-field'
    },
    {
      id: '@skyux/popovers',
      provider: 'github',
      repo: 'blackbaud/skyux-popovers'
    },
    {
      id: '@skyux/progress-indicator',
      provider: 'github',
      repo: 'blackbaud/skyux-progress-indicator'
    },
    {
      id: '@skyux/router',
      provider: 'github',
      repo: 'blackbaud/skyux-router'
    },
    {
      id: '@skyux/select-field',
      provider: 'github',
      repo: 'blackbaud/skyux-select-field'
    },
    {
      id: '@skyux/split-view',
      provider: 'github',
      repo: 'blackbaud/skyux-split-view'
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
      id: '@skyux/toast',
      provider: 'github',
      repo: 'blackbaud/skyux-toast'
    },
    {
      id: '@skyux/validation',
      provider: 'github',
      repo: 'blackbaud/skyux-validation'
    }
  ];

  public sdkPackages = [
    {
      id: '@skyux-sdk/builder',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-builder'
    },
    {
      id: 'blackbaud/skyux-sdk-builder-config',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-builder-config',
      npm: false
    },
    {
      id: '@skyux-sdk/builder-plugin-migrate',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-builder-plugin-migrate'
    },
    {
      id: '@skyux-sdk/builder-plugin-skyux',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-builder-plugin-skyux'
    },
    {
      id: '@skyux-sdk/cli',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-cli'
    },
    {
      id: '@skyux-sdk/e2e',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-e2e'
    },
    {
      id: '@skyux-sdk/pact',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-pact'
    },
    {
      id: 'blackbaud/skyux-sdk-template',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-template',
      npm: false
    },
    {
      id: 'blackbaud/skyux-sdk-template-library',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-template-library',
      npm: false
    },
    {
      id: 'blackbaud/skyux-sdk-template-stache',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-template-stache',
      npm: false
    },
    {
      id: '@skyux-sdk/testing',
      provider: 'github',
      repo: 'blackbaud/skyux-sdk-testing'
    }
  ];

  public blackbaudPackages = [
    {
      id: '@blackbaud/auth-client',
      provider: 'github',
      repo: 'blackbaud/auth-client'
    },
    {
      id: '@blackbaud/help-client',
      provider: 'github',
      repo: 'blackbaud/help-client'
    },
    {
      id: '@blackbaud/skyux',
      provider: 'github',
      repo: 'blackbaud/skyux2'
    },
    {
      id: 'blackbaud/skyux2-docs',
      provider: 'github',
      repo: 'blackbaud/skyux2-docs',
      npm: false
    },
    {
      id: '@blackbaud/skyux-builder',
      provider: 'github',
      repo: 'blackbaud/skyux-builder'
    },
    {
      id: '@blackbaud/skyux-builder-plugin-auth-email-whitelist',
      provider: 'github',
      repo: 'blackbaud/skyux-builder-plugin-auth-email-whitelist'
    },
    {
      id: '@blackbaud/skyux-builder-plugin-stache',
      provider: 'github',
      repo: 'blackbaud/skyux-builder-plugin-stache'
    },
    {
      id: '@blackbaud/skyux-builder-stache-search',
      provider: 'github',
      repo: 'blackbaud/skyux-builder-stache-search'
    },
    {
      id: '@blackbaud/skyux-cli',
      provider: 'github',
      repo: 'blackbaud/skyux-cli'
    },
    {
      id: '@blackbaud/skyux-deploy',
      provider: 'github',
      repo: 'blackbaud/skyux-deploy'
    },
    {
      id: '@blackbaud/skyux-design-tokens',
      provider: 'github',
      repo: 'blackbaud/skyux-design-tokens'
    },
    {
      id: '@blackbaud/skyux-lib-clipboard',
      provider: 'github',
      repo: 'blackbaud/skyux-lib-clipboard'
    },
    {
      id: '@blackbaud/skyux-lib-code-block',
      provider: 'github',
      repo: 'blackbaud/skyux-lib-code-block'
    },
    {
      id: '@blackbaud/skyux-lib-help',
      provider: 'github',
      repo: 'blackbaud/skyux-lib-help'
    },
    {
      id: '@blackbaud/skyux-lib-media',
      provider: 'github',
      repo: 'blackbaud/skyux-lib-media'
    },
    {
      id: '@blackbaud/skyux-lib-restricted-view',
      provider: 'github',
      repo: 'blackbaud/skyux-lib-restricted-view'
    },
    {
      id: '@blackbaud/skyux-lib-testing',
      provider: 'github',
      repo: 'blackbaud/skyux-lib-testing'
    },
    {
      id: '@blackbaud/skyux-logger',
      provider: 'github',
      repo: 'blackbaud/skyux-logger'
    },
    {
      id: '@blackbaud/skyux-lib-stache',
      provider: 'github',
      repo: 'blackbaud/stache2'
    }
  ];

  constructor() {
    this.addProviderUrl(this.blackbaudPackages);
    this.addProviderUrl(this.skyuxPackages);
    this.addProviderUrl(this.sdkPackages);

    this.blackbaudPackages.sort(sortById);
    this.skyuxPackages.sort(sortById);
    this.sdkPackages.sort(sortById);
  }

  private addProviderUrl(packages: any) {
    packages.forEach((pkg: any) => {
      if (pkg.provider === 'github') {
        pkg.repoUrl = 'https://github.com/' + pkg.repo;
      }
    });
  }

}
