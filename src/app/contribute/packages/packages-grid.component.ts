import {
  Component,
  Input
} from '@angular/core';

import {
  ListSortFieldSelectorModel
} from '@skyux/list-builder-common';

@Component({
  selector: 'app-packages-grid',
  templateUrl: './packages-grid.component.html'
})
export class PackagesGridComponent {

  @Input()
  public packages: any;

  public sortChanged(activeSort: ListSortFieldSelectorModel) {
    this.packages = this.packages.sort((a: any, b: any) => {
      let value1 = a[activeSort.fieldSelector];
      let value2 = b[activeSort.fieldSelector];

      if (value1 && typeof value1 === 'string') {
        value1 = value1.toLowerCase();
      }

      if (value2 && typeof value2 === 'string') {
        value2 = value2.toLowerCase();
      }

      if (value1 === value2) {
        return 0;
      }

      let result = value1 > value2 ? 1 : -1;

      if (activeSort.descending) {
        result *= -1;
      }

      return result;
    }).slice();
  }
}
