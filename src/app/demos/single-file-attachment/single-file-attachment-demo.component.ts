import {
  AbstractControl,
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
  SkyFileAttachmentChange,
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

  public reactiveUploadError: string;

  public templateUploadError: string;

  public maxFileSize: number = 500000;

  public showLabel: boolean = true;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public get reactiveFile(): AbstractControl {
    return this.fileForm.get('attachment');
  }

  public ngOnInit(): void {
    this.attachment = new FormControl(undefined, Validators.required);
    this.fileForm = this.formBuilder.group({
      attachment: this.attachment
    });
  }

  public reactiveFileUpdated(result: SkyFileAttachmentChange): void {
    const file = result.file;

    if (file && file.errorType) {
      this.reactiveFile.setValue(undefined);
      this.reactiveUploadError = this.getErrorMessage(file.errorType, file.errorParam);

    } else {
      this.reactiveFile.setValue(file);
      this.reactiveUploadError = undefined;
    }
  }

  public templateFileUpdated(result: SkyFileAttachmentChange): void {
    const file = result.file;

    if (file && file.errorType) {
      this.fileValue = undefined;
      this.templateUploadError = this.getErrorMessage(file.errorType, file.errorParam);

    } else {
      this.fileValue = file;
      this.templateUploadError = undefined;
    }
  }

  public validateFile(file: SkyFileItem): string {
    if (file.file.name.indexOf('a') === 0) {
      return 'You may not upload a file that begins with the letter "a."';
    } else {
      return '';
    }
  }

  private getErrorMessage(errorType: string, errorParam: string): string {
    if (errorType === 'fileType') {
      return `Please upload a file of type ${errorParam}.`;
    } else if (errorType === 'maxFileSize') {
      return `Please upload a file smaller than ${errorParam} KB.`;
    } else {
      return errorParam;
    }
  }
}
