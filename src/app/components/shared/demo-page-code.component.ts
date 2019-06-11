import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { SkyDemoPageCodeFile } from './demo-page-code-file';
import { SkyDemoPageImports } from './demo-page-imports';
import { SkyDemoPageStackBlitzService } from './demo-page-stackblitz-service';
import { SkyDemoComponentsService } from '../demo-components.service';
import { SkyDemoComponent } from '../demo-component';
import { SkyDemoPageDependencies } from './demo-page-dependencies';

@Component({
  selector: 'sky-demo-page-code',
  templateUrl: './demo-page-code.component.html',
  styleUrls: ['./demo-page-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    SkyDemoPageStackBlitzService
  ]
})
export class SkyDemoPageCodeComponent implements AfterViewInit {
  @Input()
  public codeFilesForBinding: SkyDemoPageCodeFile[];

  @Input()
  public set demoName(value: string) {

    const items = this.getItems(this.componentsService.getComponents(), value);

    items.map((item: SkyDemoComponent) => {

      this.imports = item.imports;
      this.dependencies = item.dependencies;
      this.disableStackblitz = item.disableStackblitz;

      this.codeFilesForBinding = item.getCodeFiles()
        .map((codeFile: any) => new SkyDemoPageCodeFile(
          codeFile.name,
          codeFile.fileContents,
          codeFile.componentName,
          codeFile.bootstrapSelector
        )
      );

      if (this.codeFilesForBinding.length) {
        this.codeFilesForBinding[0].active = true;
      }
    });
  }

  public disableStackblitz = false;

  public showStackblitzRunButton = true;

  public showStackblitzEmbed = false;

  @ViewChild('stackblitzEmbed')
  public embedRef: ElementRef;

  private imports: SkyDemoPageImports;
  private dependencies: SkyDemoPageDependencies;

  constructor(
    private stackBlitzService: SkyDemoPageStackBlitzService,
    private componentsService: SkyDemoComponentsService
  ) { }

  public ngAfterViewInit() {
    if (this.embedRef) {
      this.stackBlitzService.embedProject(
        this.embedRef.nativeElement,
        this.codeFilesForBinding,
        this.imports,
        this.dependencies
      );
    }
  }

  public openProjectInStackBlitz() {
    this.stackBlitzService.openProject(
      this.codeFilesForBinding,
      this.imports,
      this.dependencies
    );
  }

  private getItems(components: SkyDemoComponent[], value: string): SkyDemoComponent[] {
    let items: SkyDemoComponent[] = [];

    components.forEach((item: SkyDemoComponent) => {
      if (item.components) {
        items = items.concat(this.getItems(item.components, value));
      }

      if (item.name === value) {
        items.push(item);
      }
    });

    return items;
  }
}
