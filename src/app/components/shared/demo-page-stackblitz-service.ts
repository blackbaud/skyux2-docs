/* tslint:disable max-line-length */

import { Injectable } from '@angular/core';

import sdk from '@stackblitz/sdk';

import { SkyDemoPageCodeFile } from './demo-page-code-file';

import { EmbedOptions } from '@stackblitz/sdk/typings/interfaces';

@Injectable()
export class SkyDemoPageStackBlitzService {

  public embedProject(
    elementOrId: string | HTMLElement,
    codeFiles: SkyDemoPageCodeFile[],
    embedOptions?: EmbedOptions
  ) {
    sdk.embedProject(
      elementOrId,
      this.getPayload(codeFiles),
      embedOptions
    ).then(vm => {
      vm.getFsSnapshot()
        .then(fs => {
          console.log(fs);
        });
      vm.getDependencies()
        .then(deps => {
          console.log(deps);
        });
    });
  }

  public openProject(codeFiles: SkyDemoPageCodeFile[]) {
    sdk.openProject(this.getPayload(codeFiles), {
      openFile: 'app/' + codeFiles[0].name
    });
  }

  private getPayload(codeFiles: SkyDemoPageCodeFile[]) {
    const angularVersion = '^7.0.0';
    const dependencies = {
      '@angular/animations': angularVersion,
      '@angular/common': angularVersion,
      '@angular/compiler': angularVersion,
      '@angular/core': angularVersion,
      '@angular/forms': angularVersion,
      '@angular/http': angularVersion,
      '@angular/platform-browser': angularVersion,
      '@angular/platform-browser-dynamic': angularVersion,
      '@angular/router': angularVersion,
      '@blackbaud/auth-client': '^2.0.0',
      '@skyux/assets': '^3.0.0',
      '@skyux/avatar': '^3.0.0',
      '@skyux/config': '^3.0.0',
      '@skyux/core': '^3.0.0',
      '@skyux/errors': '^3.0.0',
      '@skyux/forms': '^3.0.0',
      '@skyux/http': '^3.0.0',
      '@skyux/i18n': '^3.0.0',
      '@skyux/indicators': '^3.0.0',
      '@skyux/layout': '^3.0.0',
      '@skyux/modals': '^3.0.0',
      '@skyux/navbar': '^3.0.0',
      '@skyux/omnibar-interop': '^3.0.0',
      '@skyux/router': '^3.0.0',
      '@skyux/theme': '^3.0.0',
      'core-js': '2.6.5',
      'rxjs': '^6.0.0',
      'rxjs-compat': '^6.0.0',
      'tslib': '1.9.3',
      'zone.js': '~0.8.28'
    };

    const payload = {
      files: this.getFiles(codeFiles, dependencies),
      title: 'SKY UX Demo',
      description: 'SKY UX Demo',
      template: 'angular-cli',
      dependencies: dependencies
    };

    return payload;
  }

  private getFiles(
    codeFiles: SkyDemoPageCodeFile[],
    dependencies: any
  ) {
    const srcFolder = `src/`;
    const appFolder = `${srcFolder}app/`;
    const demoFolder = `demo/`;

    let declarations: string[] = [];
    let bootstrapSelectors: string[] = [];
    let entryComponents: string[] = [];
    let files: any = {};
    let imports: string[] = [];

    for (let codeFile of codeFiles) {
      files[`${appFolder}${demoFolder}` + codeFile.name] = codeFile.codeImports;

      const componentName = codeFile.componentName;

      if (componentName) {
        imports.push(
          `import { ${componentName} } from './${demoFolder}${codeFile.name}';`
        );

        declarations.push(componentName);

        if (codeFile.bootstrapSelector) {
          bootstrapSelectors.push(codeFile.bootstrapSelector);
        } else {
          entryComponents.push(componentName);
        }
      }
    }

    let combinedSelectors = '';
    bootstrapSelectors.forEach((item) => {
      combinedSelectors += '<' + item + '></' + item + '>';
    });

    const banner = `/**
 * This file is needed for the StackBlitz demo only.
 * It is automatically built when using SKY UX CLI.
 * Visit https://developer.blackbaud/skyux for more information
 **/

 `;

    files['package.json'] = JSON.stringify({ dependencies }, undefined, 2);
    files[`tsconfig.json`] = `{
  "compilerOptions": {
    "target": "es5",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "lib": [
      "dom",
      "es6"
    ]
  }
}`;

    files['angular.json'] = `{
  "projects": {
    "demo": {
      "architect": {
        "build": {
          "options": {
            "index": "src/index.html",
            "styles": [
              "src/styles.scss"
            ]
          }
        }
      }
    }
  }
}`;
    files[`${srcFolder}styles.scss`] = `@import '~@skyux/theme/css/sky';`;
    files[`${srcFolder}index.html`] = `<sky-demo-app>loading...</sky-demo-app>`;

    files[`${appFolder}app.component.ts`] = `${banner}
import { Component } from '@angular/core';

@Component({
  selector: 'sky-demo-app',
  template: '${combinedSelectors}'
})
export class AppComponent { }`;

    // TODO: THIS FILE NEEDS THE MODULE + PACKAGE NAMES
    files[`${appFolder}app-sky.module.ts`] = `import {
  NgModule
} from '@angular/core';

import { SkyAlertModule } from '@skyux/indicators';
import { SkyCheckboxModule } from '@skyux/forms';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyCheckboxModule
  ]
})
export class AppSkyModule { }
`;

    files[`${appFolder}app.module.ts`] = `import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppSkyModule } from './app-sky.module.ts';

${imports.join('\n')}

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppSkyModule
  ],
  declarations: [
    AppComponent,
    ${declarations.join(',\n')}
  ],
  entryComponents: [
    ${entryComponents.join(',\n')}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }`;

    files[`${srcFolder}polyfills.ts`] = `${banner}
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';`;

    files[`${srcFolder}main.ts`] = `${banner}
import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }

  window['ngRef'] = ref;
}).catch(err => console.error(err));
`;

    return files;
  }
}
