import {
  Component,
  OnInit
} from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'sky-date-range-picker-demo',
  templateUrl: './date-range-picker-demo.component.html',
  styleUrls: ['./date-range-picker-demo.component.scss']
})
export class SkyDateRangePickerDemoComponent implements OnInit {
  public value = {};
  public disabled = false;
  public reactiveForm: FormGroup;

  public get reactiveRange(): AbstractControl {
    return this.reactiveForm.get('selectedRange');
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      selectedRange: new FormControl({})
    });

    this.reactiveForm.statusChanges.subscribe((status: any) => {
      console.log('Reactive date status:', status);
    });

    this.reactiveForm.valueChanges.subscribe((value: any) => {
      console.log('Reactive date value:', value);
    });
  }
}
