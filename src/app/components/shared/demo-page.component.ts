import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { SkyDemoTitleService } from '../../shared/title.service';

@Component({
  selector: 'sky-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyDemoPageComponent implements OnInit {
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

  public skyuxModulesForDisplay: string[];

  private _packageName: string;

  constructor(
    private titleService: SkyDemoTitleService
  ) { }

  public ngOnInit() {
    this.updateTitle();
  }

  private updateTitle() {
    if (this.pageTitle) {
      this.titleService.setTitle(this.pageTitle, 'Components');
    }
  }
}
