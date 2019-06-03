import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-demo-page-component-state',
  templateUrl: './demo-page-component-state.component.html',
  styleUrls: ['./demo-page-component-state.component.scss']
})
export class ComponentStatesTableItemComponent {
  @Input() public stateName: string;

  @Input() public imagePath: string;
}
