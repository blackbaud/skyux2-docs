import {
	ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-demo-page-module-info',
  templateUrl: './new-demo-page-module-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SkyDemoPageModuleInfoComponent { 
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

	public npmInstall: string;

	public skyuxModulesForDisplay: string[];

	private _packageName: string;
	
}
	