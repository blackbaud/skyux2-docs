import { Component } from '@angular/core';

import {
  ErrorModalConfig,
  SkyErrorModalService
} from '@blackbaud/skyux/dist/core';

@Component({
  selector: 'sky-error-demo',
  templateUrl: './error-demo.component.html',
  providers: [SkyErrorModalService]
})
export class ErrorDemoComponent {
  public errorType = 'broken';
  public customTitle = 'Custom error title';
  public customDescription = 'Custom error description';
  public customActionText = 'Custom action';

  constructor(
    private errorService: SkyErrorModalService
  ) { }

  public customAction() {
    alert('action clicked!');
  }

  public openErrorModal() {
    const config: ErrorModalConfig = {
      errorTitle: 'A title thing.',
      errorDescription: 'Try to refresh this page, or come back later.',
      errorCloseText: 'OK'
    };

    this.errorService.open(config);
  }
}
