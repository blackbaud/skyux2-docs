import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-docs-anatomy',
  templateUrl: './anatomy.component.html',
  styleUrls: ['./anatomy.component.scss']
})
export class AnatomyComponent {
  @Input() public imagePath: string;
}
