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

  public checked: boolean = false;
  public disabled: boolean = false;

  public get switchStatus(): 'on' | 'off' {
    return (this.checked === true) ? 'on' : 'off';
  }

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      notifyByEmail: new FormControl(true)
    });
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;

    const control = this.formGroup.get('notifyByEmail');

    if (control.disabled) {
      control.enable();
    } else {
      control.disable();
    }
  }

}
