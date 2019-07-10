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

import {
  SkySplitViewMessage
} from '@skyux/split-view/modules/split-view/types/split-view-message';

import {
  SkySplitViewMessageType
} from '@skyux/split-view/modules/split-view/types/split-view-message-type';

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
    {
      id: 1,
      amount: 73.19,
      date: '5/13/2019',
      vendor: 'amazon.com',
      receiptImage: 'amzn-office-supply-order-5-13-19.png',
      approvedAmount: 73.19,
      comments: ''
    },
    {
      id: 2,
      amount: 214.12,
      date: '5/14/2019',
      vendor: 'Office Max',
      receiptImage: 'office-max-order.png',
      approvedAmount: 214.12,
      comments: ''
    },
    {
      id: 3,
      amount: 29.99,
      date: '5/14/2019',
      vendor: 'amazon.com',
      receiptImage: 'amzn-office-supply-order-5-14-19.png',
      approvedAmount: 29.99,
      comments: ''
    },
    {
      id: 4,
      amount: 1500,
      date: '5/15/2019',
      vendor: 'Fresh Catering, LLC',
      receiptImage: 'fresh-catering-llc-order.png',
      approvedAmount: 1500,
      comments: ''
    }
  ];

  public set activeIndex(value: number) {
    this._activeIndex = value;
    this.activeRecord = this.items[this._activeIndex];
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
  }

  public ngAfterViewInit(): void {
  }

  public onItemClick(index: number) {
    if (this.hasUnsavedWork && index !== this.activeIndex) {
      this.confirmService.open({
        message: 'You have unsaved work. Would you like to save it before you change records?',
        type: SkyConfirmType.YesCancel
      }).closed.subscribe((closeArgs: SkyConfirmCloseEventArgs) => {
        if (closeArgs.action.toLowerCase() === 'yes') {
          this.activeIndex = index;
          this.setFocusInWorkspace();
        }
      });
    } else {
      this.activeIndex = index;
      this.setFocusInWorkspace();
    }
  }

  private setFocusInWorkspace(): void {
    const message: SkySplitViewMessage = {
      type: SkySplitViewMessageType.FocusWorkspace
    };
    this.splitViewStream.next(message);
  }

}
