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
  @Input() public stateName: string;

  @Input() public imagePath: string;
}
