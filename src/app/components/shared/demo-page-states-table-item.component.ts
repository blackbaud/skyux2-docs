import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-demo-page-states-table-item',
  templateUrl: './demo-page-states-table-item.component.html',
  styleUrls: ['./demo-page-states-table-item.component.scss']
})
export class ComponentStatesTableItemComponent {
  @Input() public stateName: string;

  @Input() public imagePath: string;
}
