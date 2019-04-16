import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { SkyDemoPageCodeFile } from './demo-page-code-file';
import { SkyDemoPagePlunkerService } from './demo-page-plunker-service';
import { SkyDemoPageStackBlitzService } from './demo-page-stackblitz-service';
import { SkyDemoComponentsService } from '../demo-components.service';
import { SkyDemoComponent } from '../demo-component';
import { SkyuxImports } from './demo-page-skyux-imports';

@Component({
  selector: 'sky-demo-page-code',
  templateUrl: './demo-page-code.component.html',
  styleUrls: ['./demo-page-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    SkyDemoPagePlunkerService,
    SkyDemoPageStackBlitzService
  ]
})
export class SkyDemoPageCodeComponent implements AfterViewInit {
  @Input()
  public codeFilesForBinding: SkyDemoPageCodeFile[];

  @Input()
  public skyuxImports: SkyuxImports;

  @Input()
  public set demoName(value: string) {

    const items = this.getItems(this.componentsService.getComponents(), value);

    items.map((item: SkyDemoComponent) => {
      this.codeFilesForBinding = item.getCodeFiles().map((codeFile: any) => {
        return new SkyDemoPageCodeFile(
          codeFile.name,
          codeFile.fileContents,
          codeFile.componentName,
          codeFile.bootstrapSelector
        );
      });
    });
  }

  @ViewChild('stackblitzEmbed')
  public embedRef: ElementRef;

  public get plunkerFiles(): any[] {
    return [
      ...this.plunkerService.getFiles(this.codeFilesForBinding)
    ];
  }

  constructor(
    private plunkerService: SkyDemoPagePlunkerService,
    private stackBlitzService: SkyDemoPageStackBlitzService,
    private componentsService: SkyDemoComponentsService
  ) { }

  public ngAfterViewInit() {
    if (this.embedRef) {
      this.stackBlitzService.embedProject(
        this.embedRef.nativeElement,
        this.codeFilesForBinding,
        this.skyuxImports
      );
    }
  }

  public openProjectInStackBlitz() {
    this.stackBlitzService.openProject(
      this.codeFilesForBinding,
      this.skyuxImports
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
