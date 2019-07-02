import {
  AfterViewInit,
  Component,
  ChangeDetectorRef
} from '@angular/core';

import {
  SkyConfirmCloseEventArgs,
  SkyConfirmService,
  SkyConfirmType
} from '@skyux/modals';

import {
  Subject
} from 'rxjs/Subject';

import { SkySplitViewMessage } from '@skyux/split-view/modules/split-view/types/split-view-message';
import { SkySplitViewMessageType } from '@skyux/split-view/modules/split-view/types/split-view-message-type';
import { SkySplitViewBeforeWorkspaceCloseHandler }
from '@skyux/split-view/modules/split-view/types/split-view-before-workspace-close-handler';

@Component({
  selector: 'sky-split-view-demo',
  templateUrl: './split-view-demo.component.html',
  styleUrls: ['./split-view-demo.component.scss']
})
export class SkySplitViewDemoComponent implements AfterViewInit {

  public splitViewStream = new Subject<SkySplitViewMessage>();

  public hasUnsavedWork = false;

  public listWidth: number;

  public items = [
    { id: 1, name: 'Jennifer Standley', amount: 12.45, date: '04/28/2019' },
    { id: 2, name: 'Jennifer Standley', amount: 52.39, date: '04/22/2019' },
    { id: 3, name: 'Jennifer Standley', amount: 9.12, date: '04/09/2019' },
    { id: 4, name: 'Jennifer Standley', amount: 193.00, date: '03/27/2019' },
    { id: 5, name: 'Jennifer Standley', amount: 19.89, date: '03/11/2019' },
    { id: 6, name: 'Jennifer Standley', amount: 214.18, date: '02/17/2019' },
    { id: 7, name: 'Jennifer Standley', amount: 4.53, date: '02/26/2019' }
  ];

  public set activeIndex(value: number) {
    this._activeIndex = value;
    this.activeRecord = this.items[this._activeIndex];
    this.checkForDisableIterators();
  }

  public get activeIndex(): number {
    return this._activeIndex;
  }

  public activeRecord: any;

  private _activeIndex = 0;

  constructor(
    public confirmService: SkyConfirmService,
    public changeDetectorRef: ChangeDetectorRef
  ) {
    this.activeIndex = 0;

    // This avoids a ExpressionChangedAfterItHasBeenCheckedError.
    setTimeout(() => {
      this.checkForDisableIterators();
    });
  }

  public ngAfterViewInit(): void {
  }

  public onItemClick(index: number) {
    this.activeIndex = index;
    this.setFocusInWorkspace();
  }

  public onIteratorNextButtonClick(): void {
    if (this.activeIndex < this.items.length - 1) {
      this.activeIndex++;
      this.setFocusInWorkspace();
    }
  }

  public onIteratorPreviousButtonClick(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.setFocusInWorkspace();
    }
  }

  public onBeforeWorkspaceClose(closeHandler: SkySplitViewBeforeWorkspaceCloseHandler): void {
    if (this.hasUnsavedWork) {
      this.confirmService.open({
        message: 'You have unsaved work. Are you sure you want to close this dialog?',
        type: SkyConfirmType.YesCancel
      }).closed.subscribe((closeArgs: SkyConfirmCloseEventArgs) => {
        if (closeArgs.action.toLowerCase() === 'yes') {
          closeHandler.closeWorkspace();
        }
      });
    } else {
      closeHandler.closeWorkspace();
    }
  }

  private setFocusInWorkspace(): void {
    const message: SkySplitViewMessage = {
      type: SkySplitViewMessageType.FocusWorkspace
    };
    this.splitViewStream.next(message);
  }

  private sendMessage(type: SkySplitViewMessageType) {
    const message: SkySplitViewMessage = {
      type: type
    };
    this.splitViewStream.next(message);
  }

  private checkForDisableIterators(): void {
    if (this.activeIndex === this.items.length - 1) {
      this.sendMessage(SkySplitViewMessageType.DisableIteratorNextButton);
    } else {
      this.sendMessage(SkySplitViewMessageType.EnableIteratorNextButton);
    }
    if (this.activeIndex === 0) {
      this.sendMessage(SkySplitViewMessageType.DisableIteratorPreviousButton);
    } else {
      this.sendMessage(SkySplitViewMessageType.EnableIteratorPreviousButton);
    }
  }

}
