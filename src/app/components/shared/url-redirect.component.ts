import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'sky-docs-url-redirect',
  template: ''
})
export class SkyDocsUrlRedirectComponent implements OnInit {

  @Input()
  public url: string;

  public ngOnInit(): void {
    if (this.url) {
      window.location.href = this.url;
    }
  }

}
