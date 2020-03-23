const fs = require('fs');
const txt = fs.readFileSync(`${__dirname}/components.json`);
const json = JSON.parse(txt);
const languages = json.languages
const keys = Object.keys(languages).filter(key => key !== 'meta');

const mapped = [];

keys.forEach(key => {
  const current = languages[key];
  const label = current.title.replace('\'', '\\\'');
  let values = [key];

  if (current.alias) {
    values = values.concat(current.alias)
  }

  mapped.push(`
    {
      label: '${label}',
      values: [
        \'${values.join('\',\n        \'')}\'
      ]
    }`);
});

const content = `
import { Component } from '@angular/core';

@Component({
  selector: 'language-type-list',
  templateUrl: './language-type-list.component.html',
  styleUrls: ['./language-type-list.component.scss']
})
export class LanguageTypeListComponent {
  public languageType: { label: string, values: string[] }[] = [${mapped.join(',')}
  ];
}`;

fs.writeFileSync(`${__dirname}/language-type-list.component.ts`, content);
