/* tslint:disable max-line-length */

import { Injectable } from '@angular/core';

import sdk from '@stackblitz/sdk';

import { SkyDemoPageCodeFile } from './demo-page-code-file';

@Injectable()
export class SkyDemoPageStackBlitzService {

  public openProject(codeFiles: SkyDemoPageCodeFile[]) {
    const angularVersion = '4.3.6';

    sdk.openProject({
      files: this.getFiles(codeFiles),
      title: 'SKY UX Demo',
      description: 'SKY UX Demo',
      template: 'angular-cli',
      dependencies: {
        '@angular/animations': angularVersion,
        '@angular/common': angularVersion,
        '@angular/compiler': angularVersion,
        '@angular/compiler-cli': angularVersion,
        '@angular/core': angularVersion,
        '@angular/forms': angularVersion,
        '@angular/http': angularVersion,
        '@angular/platform-browser': angularVersion,
        '@angular/platform-browser-dynamic': angularVersion,
        '@angular/router': angularVersion,
        '@blackbaud/skyux': '2.12.1',
        'core-js': '2.4.1',
        'rxjs': '5.4.3',
        'zone.js': '0.8.10'
      }
    }, {
      openFile: 'app/' + codeFiles[0].name
    });
  }

  private getFiles(codeFiles: SkyDemoPageCodeFile[]) {
    let declarations: string[] = [];
    let bootstrapSelectors: string[] = [];
    let entryComponents: string[] = [];
    let files: any = {};
    let imports: string[] = [];

    for (let codeFile of codeFiles) {
      files['app/' + codeFile.name] = codeFile.codeImports;

      const componentName = codeFile.componentName;

      if (componentName) {
        imports.push(
          `import { ${componentName} } from '../app/${codeFile.name}';`
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

    files['index.html'] = `<sky-demo-app>loading...</sky-demo-app>`;

    files['needed-for-demo/app.component.ts'] = `${banner}
import { Component } from '@angular/core';

@Component({
  selector: 'sky-demo-app',
  template: '${combinedSelectors}'
})
export class AppComponent { }`;

    files['needed-for-demo/app.module.ts'] = `import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SkyModule } from '@blackbaud/skyux/dist/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

${imports.join('\n')}

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SkyModule
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

    files['needed-for-demo/polyfills.ts'] = `${banner}
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';`;

    files['.angular-cli.json'] = `
{
  "apps": [{
    "styles": ["needed-for-demo/styles.scss"]
  }]
}`;

    files['needed-for-demo/styles.scss'] = `@import '~@blackbaud/skyux/dist/css/sky';`;

    files['main.ts'] = `${banner}
import './needed-for-demo/polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './needed-for-demo/app.module';

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
