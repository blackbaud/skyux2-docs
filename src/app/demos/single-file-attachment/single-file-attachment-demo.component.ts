import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import {
  Component,
  OnInit
} from '@angular/core';

import {
  SkyFileItem
} from '@skyux/forms';

@Component({
  selector: 'sky-single-file-attachment-demo',
  templateUrl: './single-file-attachment-demo.component.html'
})
export class SkySingleFileAttachmentDemoComponent implements OnInit {
  public acceptedTypes: Array<String>;

  public attachment: FormControl;

  public fileForm: FormGroup;

  public fileValue: SkyFileItem;

  public maxFileSize: number = 4000000;

  public showLabel: boolean = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.attachment = new FormControl(undefined, Validators.required);
    this.fileForm = this.formBuilder.group({
      attachment: this.attachment
    });
  }

  public validateFile(file: SkyFileItem): string {
    if (file.file.name.indexOf('a') === 0) {
        return 'You may not upload a file that begins with the letter "a."';
    } else {
      return '';
    }
  }
}
