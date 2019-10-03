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
  public firstName: FormControl;
  public aboutMe: FormControl;
  public maxNameCharacterCount: number = 10;
  public maxAboutCharacterCount: number = 150;
  public person: { firstName: string, aboutMe: string } = {firstName: '', aboutMe: ''};

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.firstName = this.formBuilder.control('John');
    this.aboutMe = this.formBuilder.control('My name is John and I like to collect rocks. ' +
    'When I\'m not collecting rocks, I like to learn about outer space.');

    this.characterCountForm = this.formBuilder.group({
      firstName: this.firstName,
      aboutMe: this.aboutMe
    });
  }
}
