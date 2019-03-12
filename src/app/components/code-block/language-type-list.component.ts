import { Component } from '@angular/core';

@Component({
  selector: 'language-type-list',
  templateUrl: './language-type-list.component.html',
  styleUrls: ['./language-type-list.component.scss']
})
export class LanguageTypeListComponent {
  public languageType: { label: string, value: string }[] = [
    {
      label: 'ABAP',
      value: 'abap'
    },
    {
      label: 'ActionScript',
      value: 'actionscript'
    },
    {
      label: 'Ada',
      value: 'ada'
    },
    {
      label: 'Apache Configuration',
      value: 'apacheconf'
    },
    {
      label: 'APL',
      value: 'apl'
    },
    {
      label: 'AppleScript',
      value: 'applescript'
    },
    {
      label: 'Arduino',
      value: 'arduino'
    },
    {
      label: 'ARFF',
      value: 'arff'
    },
    {
      label: 'AsciiDoc',
      value: 'asciidoc'
    },
    {
      label: '6502 Assembly',
      value: 'asm6502'
    },
    {
      label: 'ASP.NET (C#)',
      value: 'aspnet'
    },
    {
      label: 'AutoHotkey',
      value: 'autohotkey'
    },
    {
      label: 'AutoIt',
      value: 'autoit'
    },
    {
      label: 'Bash',
      value: 'bash'
    },
    {
      label: 'BASIC',
      value: 'basic'
    },
    {
      label: 'Batch',
      value: 'batch'
    },
    {
      label: 'Bison',
      value: 'bison'
    },
    {
      label: 'Bro',
      value: 'bro'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C-like',
      value: 'clike'
    },
    {
      label: 'C#',
      value: 'csharp'
    },
    {
      label: 'C++',
      value: 'cpp'
    },
    {
      label: 'Clojure',
      value: 'clojure'
    },
    {
      label: 'CoffeeScript',
      value: 'coffeescript'
    },
    {
      label: 'Content-Security-Policy',
      value: 'csp'
    },
    {
      label: 'Crystal',
      value: 'crystal'
    },
    {
      label: 'CSS',
      value: 'css'
    },
    {
      label: 'CSS Extras',
      value: 'css-extras'
    },
    {
      label: 'D',
      value: 'd'
    },
    {
      label: 'Dart',
      value: 'dart'
    },
    {
      label: 'Diff',
      value: 'diff'
    },
    {
      label: 'Django/Jinja2',
      value: 'django'
    },
    {
      label: 'Docker',
      value: 'docker'
    },
    {
      label: 'Eiffel',
      value: 'eiffel'
    },
    {
      label: 'Elixir',
      value: 'elixir'
    },
    {
      label: 'Elm',
      value: 'elm'
    },
    {
      label: 'ERB',
      value: 'erb'
    },
    {
      label: 'Erlang',
      value: 'erlang'
    },
    {
      label: 'F#',
      value: 'fsharp'
    },
    {
      label: 'Flow',
      value: 'flow'
    },
    {
      label: 'Fortran',
      value: 'fortran'
    },
    {
      label: 'GameMaker Language',
      value: 'gml'
    },
    {
      label: 'GEDCOM',
      value: 'gedcom'
    },
    {
      label: 'Gherkin',
      value: 'gherkin'
    },
    {
      label: 'Git',
      value: 'git'
    },
    {
      label: 'GLSL',
      value: 'glsl'
    },
    {
      label: 'Go',
      value: 'go'
    },
    {
      label: 'GraphQL',
      value: 'graphql'
    },
    {
      label: 'Groovy',
      value: 'groovy'
    },
    {
      label: 'Haml',
      value: 'haml'
    },
    {
      label: 'Handlebars',
      value: 'handlebars'
    },
    {
      label: 'Haskell',
      value: 'haskell'
    },
    {
      label: 'Haxe',
      value: 'haxe'
    },
    {
      label: 'HTTP',
      value: 'http'
    },
    {
      label: 'HTTP Public-Key-Pins',
      value: 'hpkp'
    },
    {
      label: 'HTTP Strict-Transport-Security',
      value: 'hsts'
    },
    {
      label: 'IchigoJam',
      value: 'ichigojam'
    },
    {
      label: 'Icon',
      value: 'icon'
    },
    {
      label: 'Inform 7',
      value: 'inform7'
    },
    {
      label: 'Ini',
      value: 'ini'
    },
    {
      label: 'Io',
      value: 'io'
    },
    {
      label: 'J',
      value: 'j'
    },
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'JavaScript',
      value: 'javascript'
    },
    {
      label: 'Jolie',
      value: 'jolie'
    },
    {
      label: 'JSON',
      value: 'json'
    },
    {
      label: 'Julia',
      value: 'julia'
    },
    {
      label: 'Keyman',
      value: 'keyman'
    },
    {
      label: 'Kotlin',
      value: 'kotlin'
    },
    {
      label: 'LaTeX',
      value: 'latex'
    },
    {
      label: 'Less',
      value: 'less'
    },
    {
      label: 'Liquid',
      value: 'liquid'
    },
    {
      label: 'Lisp',
      value: 'lisp'
    },
    {
      label: 'LiveScript',
      value: 'livescript'
    },
    {
      label: 'LOLCODE',
      value: 'lolcode'
    },
    {
      label: 'Lua',
      value: 'lua'
    },
    {
      label: 'Makefile',
      value: 'makefile'
    },
    {
      label: 'Markdown',
      value: 'markdown'
    },
    {
      label: 'Markup',
      value: 'markup'
    },
    {
      label: 'Markup templating',
      value: 'markup-templating'
    },
    {
      label: 'MATLAB',
      value: 'matlab'
    },
    {
      label: 'MEL',
      value: 'mel'
    },
    {
      label: 'Mizar',
      value: 'mizar'
    },
    {
      label: 'Monkey',
      value: 'monkey'
    },
    {
      label: 'N4JS',
      value: 'n4js'
    },
    {
      label: 'NASM',
      value: 'nasm'
    },
    {
      label: 'nginx',
      value: 'nginx'
    },
    {
      label: 'Nim',
      value: 'nim'
    },
    {
      label: 'Nix',
      value: 'nix'
    },
    {
      label: 'NSIS',
      value: 'nsis'
    },
    {
      label: 'Objective-C',
      value: 'objectivec'
    },
    {
      label: 'OCaml',
      value: 'ocaml'
    },
    {
      label: 'OpenCL',
      value: 'opencl'
    },
    {
      label: 'Oz',
      value: 'oz'
    },
    {
      label: 'PARI/GP',
      value: 'parigp'
    },
    {
      label: 'Parser',
      value: 'parser'
    },
    {
      label: 'Pascal',
      value: 'pascal'
    },
    {
      label: 'Perl',
      value: 'perl'
    },
    {
      label: 'PHP',
      value: 'php'
    },
    {
      label: 'PHP Extras',
      value: 'php-extras'
    },
    {
      label: 'PL/SQL',
      value: 'plsql'
    },
    {
      label: 'PowerShell',
      value: 'powershell'
    },
    {
      label: 'Processing',
      value: 'processing'
    },
    {
      label: 'Prolog',
      value: 'prolog'
    },
    {
      label: '.properties',
      value: 'properties'
    },
    {
      label: 'Protocol Buffers',
      value: 'protobuf'
    },
    {
      label: 'Pug',
      value: 'pug'
    },
    {
      label: 'Puppet',
      value: 'puppet'
    },
    {
      label: 'Pure',
      value: 'pure'
    },
    {
      label: 'Python',
      value: 'python'
    },
    {
      label: 'Q (kdb+ database)',
      value: 'q'
    },
    {
      label: 'Qore',
      value: 'qore'
    },
    {
      label: 'R',
      value: 'r'
    },
    {
      label: 'React JSX',
      value: 'jsx'
    },
    {
      label: 'React TSX',
      value: 'tsx'
    },
    {
      label: 'Reason',
      value: 'reason'
    },
    {
      label: 'Renpy',
      value: 'renpy'
    },
    {
      label: 'reST (reStructuredText)',
      value: 'rest'
    },
    {
      label: 'Rip',
      value: 'rip'
    },
    {
      label: 'Roboconf',
      value: 'roboconf'
    },
    {
      label: 'Ruby',
      value: 'ruby'
    },
    {
      label: 'Rust',
      value: 'rust'
    },
    {
      label: 'SAS',
      value: 'sas'
    },
    {
      label: 'Sass (Sass)',
      value: 'sass'
    },
    {
      label: 'Sass (Scss)',
      value: 'scss'
    },
    {
      label: 'Scala',
      value: 'scala'
    },
    {
      label: 'Scheme',
      value: 'scheme'
    },
    {
      label: 'Smalltalk',
      value: 'smalltalk'
    },
    {
      label: 'Smarty',
      value: 'smarty'
    },
    {
      label: 'Soy (Closure Template)',
      value: 'soy'
    },
    {
      label: 'SQL',
      value: 'sql'
    },
    {
      label: 'Stylus',
      value: 'stylus'
    },
    {
      label: 'Swift',
      value: 'swift'
    },
    {
      label: 'TAP',
      value: 'tap'
    },
    {
      label: 'Tcl',
      value: 'tcl'
    },
    {
      label: 'Template Toolkit 2',
      value: 'tt2'
    },
    {
      label: 'Textile',
      value: 'textile'
    },
    {
      label: 'Twig',
      value: 'twig'
    },
    {
      label: 'TypeScript',
      value: 'typescript'
    },
    {
      label: 'VB.Net',
      value: 'vbnet'
    },
    {
      label: 'Velocity',
      value: 'velocity'
    },
    {
      label: 'Verilog',
      value: 'verilog'
    },
    {
      label: 'VHDL',
      value: 'vhdl'
    },
    {
      label: 'vim',
      value: 'vim'
    },
    {
      label: 'Visual Basic',
      value: 'visual-basic'
    },
    {
      label: 'WebAssembly',
      value: 'wasm'
    },
    {
      label: 'Wiki markup',
      value: 'wiki'
    },
    {
      label: 'Xeora',
      value: 'xeora'
    },
    {
      label: 'Xojo (REALbasic)',
      value: 'xojo'
    },
    {
      label: 'XQuery',
      value: 'xquery'
    },
    {
      label: 'YAML',
      value: 'yam'
    }
  ];
}
