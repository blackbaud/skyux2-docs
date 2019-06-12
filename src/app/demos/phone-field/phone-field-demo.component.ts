import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'sky-phone-field-demo',
  templateUrl: './phone-field-demo.component.html'
})
export class SkyPhoneFieldDemoComponent implements OnInit {

  public phoneNumber: string;

  public phoneForm: FormGroup;

  public phoneControl: FormControl;

  constructor() { }

  public ngOnInit() {
    this.phoneControl = new FormControl();
    this.phoneForm = new FormGroup({
      'phoneControl': this.phoneControl
    });
  }

}
