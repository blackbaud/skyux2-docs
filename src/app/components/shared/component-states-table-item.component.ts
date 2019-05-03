import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-docs-component-states-table-item',
  templateUrl: './component-states-table-item.component.html',
  styleUrls: ['./component-states-table-item.component.scss']
})
export class ComponentStatesTableItemComponent {
  @Input() private stateName: string;
  
  @Input() private imagePath: string;
}
