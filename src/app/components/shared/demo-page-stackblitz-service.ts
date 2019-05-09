/* tslint:disable max-line-length */

import { Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';

import { SkyDemoPageCodeFile } from './demo-page-code-file';
import { SkyDemoPageImports } from './demo-page-imports';
import { SkyDemoPageDependencies } from './demo-page-dependencies';

@Injectable()
export class SkyDemoPageStackBlitzService {

  private srcFolder = `src/`;

  private appFolder = `${this.srcFolder}app/`;

  private demoFolder = `demo/`;

  public embedProject(
    elementOrId: string | HTMLElement,
    codeFiles: SkyDemoPageCodeFile[],
    imports: SkyDemoPageImports,
    dependencies: SkyDemoPageDependencies
  ) {
    sdk.embedProject(
      elementOrId,
      this.getPayload(
        codeFiles,
        imports,
        dependencies
      ),
      {
        openFile: this.getFileToOpen(codeFiles),
        height: 700,
        forceEmbedLayout: true
      }
    );
  }

  public openProject(
    codeFiles: SkyDemoPageCodeFile[],
    imports: SkyDemoPageImports,
    dependencies: SkyDemoPageDependencies
  ) {
    sdk.openProject(
      this.getPayload(
        codeFiles,
        imports,
        dependencies
      ),
      {
        openFile: this.getFileToOpen(codeFiles)
      }
    );
  }

  private getFileToOpen(codeFiles: SkyDemoPageCodeFile[]) {
    return this.appFolder + this.demoFolder + codeFiles[0].name;
  }

  private getPayload(
    codeFiles: SkyDemoPageCodeFile[],
    imports?: SkyDemoPageImports,
    dependencies?: SkyDemoPageDependencies
  ) {
    const angularVersion = '^7.0.0';
    const skyuxVersion = '^3.0.0';

    const commonDependencies: { [key: string]: string } = {
      '@angular/animations': angularVersion,
      '@angular/common': angularVersion,
      '@angular/compiler': angularVersion,
      '@angular/core': angularVersion,
      '@angular/forms': angularVersion,
      '@angular/http': angularVersion,
      '@angular/platform-browser': angularVersion,
      '@angular/platform-browser-dynamic': angularVersion,
      '@angular/router': angularVersion,
      '@skyux/animations': skyuxVersion,
      '@skyux/assets': skyuxVersion,
      '@skyux/config': skyuxVersion,
      '@skyux/core': skyuxVersion,
      '@skyux/errors': skyuxVersion,
      '@skyux/forms': skyuxVersion,
      '@skyux/http': skyuxVersion,
      '@skyux/i18n': skyuxVersion,
      '@skyux/indicators': skyuxVersion,
      '@skyux/layout': skyuxVersion,
      '@skyux/modals': skyuxVersion,
      '@skyux/popovers': skyuxVersion,
      '@skyux/router': skyuxVersion,
      '@skyux/theme': skyuxVersion,
      'core-js': '2.6.5',
      'rxjs': '^6.0.0',
      'rxjs-compat': '^6.0.0',
      'tslib': '1.9.3',
      'zone.js': '~0.8.28'
    };

    if (imports) {
      Object.keys(imports).forEach((key: string) => {
        commonDependencies[key] = skyuxVersion;
      });
    }

    if (dependencies) {
      Object.keys(dependencies).forEach((key: string) => {
        commonDependencies[key] = dependencies[key];
      });
    }

    const payload = {
      files: this.getFiles(
        codeFiles,
        imports,
        dependencies
      ),
      title: 'SKY UX Demo',
      description: 'SKY UX Demo',
      template: 'angular-cli',
      dependencies: commonDependencies,
      settings: {
        compile: {
          clearConsole: false
        }
      }
    };

    return payload;
  }

  private getFilenameNoExtension(filename: string) {
    const lastDot = filename.lastIndexOf('.');
    return lastDot === -1 ? filename : filename.substr(0, lastDot);
  }

  private getFiles(
    codeFiles: SkyDemoPageCodeFile[],
    imports: SkyDemoPageImports,
    dependencies: any
  ) {
    let declarations: string[] = [];
    let bootstrapSelectors: string[] = [];
    let entryComponents: string[] = [];
    let files: any = {};
    let componentImports: string[] = [];

    for (let codeFile of codeFiles) {
      files[`${this.appFolder}${this.demoFolder}` + codeFile.name] = codeFile.codeImports;

      const componentName = codeFile.componentName;

      if (componentName) {
        const componentImport = this.getFilenameNoExtension(codeFile.name);

        componentImports.push(
          `import { ${componentName} } from './${this.demoFolder}${componentImport}';`
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

    let appSkyImports = '';
    let appSkyExports: string[] = [];
    let includeListStateProvider = false;

    Object.keys(imports).forEach((key: string) => {
      appSkyImports += `import { ${imports[key].join()} } from '${key}';\n`;
      appSkyExports = appSkyExports.concat(...imports[key]);

      if (key.toUpperCase().indexOf('LIST') > -1) {
        includeListStateProvider = true;
      }
    });

    let listStateImport = '';
    let listStateProvider = '';

    if (includeListStateProvider) {
      listStateImport = `import {
  ListState,
  ListStateDispatcher
} from '@skyux/list-builder/modules/list/state';`;
      listStateProvider = `ListState, ListStateDispatcher`;
    }

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
    files[`${this.srcFolder}styles.scss`] = `@import '~@skyux/theme/css/sky';

body {
  background-color: #FFF;
  margin: 15px;
}`;
    files[`${this.srcFolder}index.html`] = `<sky-demo-app>
  Loading...
</sky-demo-app>`;

    files[`${this.appFolder}app.component.ts`] = `${banner}
import { Component } from '@angular/core';

@Component({
  selector: 'sky-demo-app',
  template: '${combinedSelectors}'
})
export class AppComponent { }`;

    files[`${this.appFolder}app-sky.module.ts`] = `import {
  NgModule
} from '@angular/core';

${appSkyImports}

@NgModule({
  exports: [
    ${appSkyExports.join(',\n    ')}
  ]
})
export class AppSkyModule { }
`;

    files[`${this.appFolder}app.module.ts`] = `import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppSkyModule } from './app-sky.module';

${listStateImport}
${componentImports.join('\n')}

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AppSkyModule
  ],
  declarations: [
    AppComponent,
    ${declarations.join(',\n')}
  ],
  entryComponents: [
    ${entryComponents.join(',\n')}
  ],
  providers: [ ${listStateProvider} ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }`;

    files[`${this.srcFolder}polyfills.ts`] = `${banner}
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';`;

    files[`${this.srcFolder}main.ts`] = `${banner}
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
