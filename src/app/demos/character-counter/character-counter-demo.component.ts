import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'sky-character-counter-demo',
  templateUrl: './character-counter-demo.component.html'
})
export class SkyCharacterCounterDemoComponent implements OnInit {
  public characterCountForm: FormGroup;
  public firstName: FormControl;
  public maxCharacterCount: number = 10;
  public nameValue: string = '';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.firstName = this.formBuilder.control('John');

    this.characterCountForm = this.formBuilder.group({
      firstName: this.firstName
    });
  }
}
