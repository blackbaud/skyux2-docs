import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

import {
  SkyDateRangeCalculation,
  SkyDateRangeCalculatorId,
  SkyDateRangeCalculatorType,
  SkyDateRangeService
} from '@skyux/datetime';

import {
  Subject
} from 'rxjs/Subject';

import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'sky-date-range-picker-demo',
  templateUrl: './date-range-picker-demo.component.html'
})
export class SkyDateRangePickerDemoComponent implements OnInit, OnDestroy {
  public calculatorIds: SkyDateRangeCalculatorId[];
  public dateFormat: string;
  public reactiveForm: FormGroup;

  public get reactiveRange(): AbstractControl {
    return this.reactiveForm.get('lastDonation');
  }

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private dateRangeService: SkyDateRangeService,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      lastDonation: new FormControl()
    });

    this.reactiveRange.statusChanges
      .distinctUntilChanged()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((status) => {
        console.log(
          'Date range status change:',
          status,
          this.reactiveRange.errors
        );
      });

    this.reactiveRange.valueChanges
      .distinctUntilChanged()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((value) => {
        console.log(
          'Date range value change:',
          value
        );
      });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public toggleDisabled(): void {
    if (this.reactiveForm.disabled) {
      this.reactiveForm.enable();
    } else {
      this.reactiveForm.disable();
    }
  }

  public resetForm(): void {
    this.dateFormat = undefined;
    this.calculatorIds = undefined;
    this.reactiveForm.reset();
    this.reactiveForm.markAsPristine();
    this.reactiveForm.markAsUntouched();
  }

  public setRange(): void {
    const range: SkyDateRangeCalculation = {
      calculatorId: SkyDateRangeCalculatorId.SpecificRange,
      startDate: new Date('1/1/2012'),
      endDate: new Date('1/1/2013')
    };

    this.reactiveRange.setValue(range);
  }

  public setInvalidRange(): void {
    const range: SkyDateRangeCalculation = {
      calculatorId: SkyDateRangeCalculatorId.SpecificRange,
      startDate: new Date('1/1/2013'),
      endDate: new Date('1/1/2012')
    };

    this.reactiveRange.setValue(range);
  }

  public setInvalidDates(): void {
    const range: SkyDateRangeCalculation = {
      calculatorId: SkyDateRangeCalculatorId.SpecificRange,
      startDate: 'invalid' as any,
      endDate: 'invalid' as any
    };

    this.reactiveRange.setValue(range);
  }

  public setCalculatorIds(): void {

    const calculator = this.dateRangeService.createCalculator({
      shortDescription: 'Since 1999',
      type: SkyDateRangeCalculatorType.Relative,
      getValue: () => {
        return {
          startDate: new Date('1/1/1999'),
          endDate: new Date()
        };
      }
    });

    this.calculatorIds = [
      calculator.calculatorId,
      SkyDateRangeCalculatorId.SpecificRange,
      SkyDateRangeCalculatorId.LastFiscalYear
    ];
  }

  public setDateFormat(): void {
    this.dateFormat = 'YYYY-MM-DD';
  }
}
