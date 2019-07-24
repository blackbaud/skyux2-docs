import {
  Component
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'sky-toggle-switch-demo',
  templateUrl: './toggle-switch-demo.component.html'
})
export class SkyToggleSwitchDemoComponent {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      notifyByEmail: new FormControl(true)
    });
  }

}
