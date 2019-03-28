import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList
} from '@angular/core';

import { SkyDemoTitleService } from '../../shared/title.service';
import { SkyDemoPagePropertiesComponent } from './demo-page-properties.component';
import { SkyDemoPageExampleComponent } from './demo-page-example.component';
import { SkyDemoPageContentComponent } from './demo-page-content.component';

@Component({
  selector: 'sky-new-demo-page',
  templateUrl: './new-demo-page.component.html',
  styleUrls: ['./new-demo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyNewDemoPageComponent implements OnInit, AfterContentInit {
  @Input()
  public pageTitle: string;

  @Input()
  public set skyuxModule(value: string | string[]) {
    if (value) {
      if (Array.isArray(value)) {
        this.skyuxModulesForDisplay = value;
      } else {
        this.skyuxModulesForDisplay = [value];
      }
    } else {
      this.skyuxModulesForDisplay = undefined;
    }
  }

  @Input()
  public set packageName(value: string) {
    this._packageName = value;
    this.npmInstall = value && `npm install ${value} --save --save-exact`;
  }

  public get packageName(): string {
    return this._packageName;
  }

  @Input()
  public summary: string;

  public npmInstall: string;

  public tableOfContentsRoutes: any[] = [];

  public skyuxModulesForDisplay: string[];

  @ContentChildren(SkyDemoPagePropertiesComponent)
  private propertiesComponents: QueryList<SkyDemoPagePropertiesComponent>;

  @ContentChildren(SkyDemoPageExampleComponent)
  private exampleComponents: QueryList<SkyDemoPageExampleComponent>;

  @ContentChildren(SkyDemoPageContentComponent)
  private contentComponents: QueryList<SkyDemoPageContentComponent>;

  private _packageName: string;

  constructor(
    private titleService: SkyDemoTitleService
  ) { }

  public ngOnInit() {
    this.updateTitle();
  }

  public ngAfterContentInit(): void {
    if (this.npmInstall) {
      this.tableOfContentsRoutes.push({
        name: 'Installation',
        fragment: 'installation',
        path: '.'
      });
    }

    this.propertiesComponents.map((component: any) => {
      this.tableOfContentsRoutes.push({
        name: component.sectionHeading,
        fragment: this.getFragment(component.sectionHeading),
        path: '.'
      });
    });

    this.exampleComponents.map((component: any) => {
      this.tableOfContentsRoutes.push({
        name: 'Demo',
        fragment: 'demo',
        path: '.'
      });
    });

    if (this.contentComponents.length) {
      this.tableOfContentsRoutes.push({
        name: 'Code',
        fragment: 'code',
        path: '.'
      });
    }

    this.contentComponents.map((component: any) => {
      this.tableOfContentsRoutes.push({
        name: component.sectionHeading,
        fragment: this.getFragment(component.sectionHeading),
        path: '.'
      });
    });
  }

  private getFragment(name: string): string {
    return name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }

  private updateTitle() {
    if (this.pageTitle) {
      this.titleService.setTitle(this.pageTitle, 'Components');
    }
  }
}
