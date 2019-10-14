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
  selector: 'sky-character-count-demo',
  templateUrl: './character-count-demo.component.html'
})
export class SkyCharacterCountDemoComponent implements OnInit {
  public characterCountForm: FormGroup;
  public description: FormControl;
  public comments: FormControl;
  public maxDescriptionCharacterCount: number = 60;
  public maxCommentsCharacterCount: number = 250;
  public transaction: { description: string, comments: string } = {description: '', comments: ''};

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.description = this.formBuilder.control('Boys and Girls Club of South Carolina donation');
    this.comments = this.formBuilder.control(`Donation to the Boys and Girls Club will be used to refurbish safe playground equipment and purchase new laptops. The laptops will be used to complete homework and improve technological skills.`);

    this.characterCountForm = this.formBuilder.group({
      description: this.description,
      comments: this.comments
    });
  }
}
