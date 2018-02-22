import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

import { SkyDemoPageCodeFile } from './demo-page-code-file';
import { SkyDemoPagePlunkerService } from './demo-page-plunker-service';
import { SkyDemoComponentsService } from '../demo-components.service';
import { SkyDemoComponent } from '../demo-component';

@Component({
  selector: 'sky-demo-page-code',
  templateUrl: './demo-page-code.component.html',
  styleUrls: ['./demo-page-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SkyDemoPagePlunkerService]
})
export class SkyDemoPageCodeComponent {
  @Input()
  public codeFilesForBinding: SkyDemoPageCodeFile[];

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

  public get plunkerFiles(): any[] {
    return [
      ...this.plunkerService.getFiles(this.codeFilesForBinding)
    ];
  }

  constructor(
    private plunkerService: SkyDemoPagePlunkerService,
    private componentsService: SkyDemoComponentsService
  ) { }

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
