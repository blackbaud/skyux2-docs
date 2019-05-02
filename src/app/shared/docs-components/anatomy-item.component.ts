import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-docs-anatomy-item',
  templateUrl: './anatomy-item.component.html',
  styleUrls: ['./anatomy-item.component.scss']
})
export class AnatomyItemComponent {

  @Input() isOptional: boolean;
  
  @Input() anatomyNumber: string;
  
}
