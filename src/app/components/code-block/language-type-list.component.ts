
import { Component } from '@angular/core';

@Component({
  selector: 'language-type-list',
  templateUrl: './language-type-list.component.html',
  styleUrls: ['./language-type-list.component.scss']
})
export class LanguageTypeListComponent {
  public languageType: { label: string, values: string[] }[] = [
    {
      label: 'Markup',
      values: [
        'markup',
        'html',
        'xml',
        'svg',
        'mathml'
      ]
    },
    {
      label: 'CSS',
      values: [
        'css'
      ]
    },
    {
      label: 'C-like',
      values: [
        'clike'
      ]
    },
    {
      label: 'JavaScript',
      values: [
        'javascript',
        'js'
      ]
    },
    {
      label: 'ABAP',
      values: [
        'abap'
      ]
    },
    {
      label: 'Augmented Backus–Naur form',
      values: [
        'abnf'
      ]
    },
    {
      label: 'ActionScript',
      values: [
        'actionscript'
      ]
    },
    {
      label: 'Ada',
      values: [
        'ada'
      ]
    },
    {
      label: 'ANTLR4',
      values: [
        'antlr4',
        'g4'
      ]
    },
    {
      label: 'Apache Configuration',
      values: [
        'apacheconf'
      ]
    },
    {
      label: 'APL',
      values: [
        'apl'
      ]
    },
    {
      label: 'AppleScript',
      values: [
        'applescript'
      ]
    },
    {
      label: 'AQL',
      values: [
        'aql'
      ]
    },
    {
      label: 'Arduino',
      values: [
        'arduino'
      ]
    },
    {
      label: 'ARFF',
      values: [
        'arff'
      ]
    },
    {
      label: 'AsciiDoc',
      values: [
        'asciidoc',
        'adoc'
      ]
    },
    {
      label: '6502 Assembly',
      values: [
        'asm6502'
      ]
    },
    {
      label: 'ASP.NET (C#)',
      values: [
        'aspnet'
      ]
    },
    {
      label: 'AutoHotkey',
      values: [
        'autohotkey'
      ]
    },
    {
      label: 'AutoIt',
      values: [
        'autoit'
      ]
    },
    {
      label: 'Bash',
      values: [
        'bash',
        'shell'
      ]
    },
    {
      label: 'BASIC',
      values: [
        'basic'
      ]
    },
    {
      label: 'Batch',
      values: [
        'batch'
      ]
    },
    {
      label: 'BBcode',
      values: [
        'bbcode'
      ]
    },
    {
      label: 'Bison',
      values: [
        'bison'
      ]
    },
    {
      label: 'Backus–Naur form',
      values: [
        'bnf',
        'rbnf'
      ]
    },
    {
      label: 'Brainfuck',
      values: [
        'brainfuck'
      ]
    },
    {
      label: 'BrightScript',
      values: [
        'brightscript'
      ]
    },
    {
      label: 'Bro',
      values: [
        'bro'
      ]
    },
    {
      label: 'C',
      values: [
        'c'
      ]
    },
    {
      label: 'Concurnas',
      values: [
        'concurnas',
        'conc'
      ]
    },
    {
      label: 'C#',
      values: [
        'csharp',
        'cs',
        'dotnet'
      ]
    },
    {
      label: 'C++',
      values: [
        'cpp'
      ]
    },
    {
      label: 'CIL',
      values: [
        'cil'
      ]
    },
    {
      label: 'CoffeeScript',
      values: [
        'coffeescript',
        'coffee'
      ]
    },
    {
      label: 'CMake',
      values: [
        'cmake'
      ]
    },
    {
      label: 'Clojure',
      values: [
        'clojure'
      ]
    },
    {
      label: 'Crystal',
      values: [
        'crystal'
      ]
    },
    {
      label: 'Content-Security-Policy',
      values: [
        'csp'
      ]
    },
    {
      label: 'CSS Extras',
      values: [
        'css-extras'
      ]
    },
    {
      label: 'D',
      values: [
        'd'
      ]
    },
    {
      label: 'Dart',
      values: [
        'dart'
      ]
    },
    {
      label: 'DAX',
      values: [
        'dax'
      ]
    },
    {
      label: 'Diff',
      values: [
        'diff'
      ]
    },
    {
      label: 'Django/Jinja2',
      values: [
        'django',
        'jinja2'
      ]
    },
    {
      label: 'DNS zone file',
      values: [
        'dns-zone-file',
        'dns-zone'
      ]
    },
    {
      label: 'Docker',
      values: [
        'docker',
        'dockerfile'
      ]
    },
    {
      label: 'Extended Backus–Naur form',
      values: [
        'ebnf'
      ]
    },
    {
      label: 'Eiffel',
      values: [
        'eiffel'
      ]
    },
    {
      label: 'EJS',
      values: [
        'ejs'
      ]
    },
    {
      label: 'Elixir',
      values: [
        'elixir'
      ]
    },
    {
      label: 'Elm',
      values: [
        'elm'
      ]
    },
    {
      label: 'Embedded Lua templating',
      values: [
        'etlua'
      ]
    },
    {
      label: 'ERB',
      values: [
        'erb'
      ]
    },
    {
      label: 'Erlang',
      values: [
        'erlang'
      ]
    },
    {
      label: 'Excel Formula',
      values: [
        'excel-formula',
        'xlsx',
        'xls'
      ]
    },
    {
      label: 'F#',
      values: [
        'fsharp'
      ]
    },
    {
      label: 'Factor',
      values: [
        'factor'
      ]
    },
    {
      label: 'Firestore security rules',
      values: [
        'firestore-security-rules'
      ]
    },
    {
      label: 'Flow',
      values: [
        'flow'
      ]
    },
    {
      label: 'Fortran',
      values: [
        'fortran'
      ]
    },
    {
      label: 'FreeMarker Template Language',
      values: [
        'ftl'
      ]
    },
    {
      label: 'G-code',
      values: [
        'gcode'
      ]
    },
    {
      label: 'GDScript',
      values: [
        'gdscript'
      ]
    },
    {
      label: 'GEDCOM',
      values: [
        'gedcom'
      ]
    },
    {
      label: 'Gherkin',
      values: [
        'gherkin'
      ]
    },
    {
      label: 'Git',
      values: [
        'git'
      ]
    },
    {
      label: 'GLSL',
      values: [
        'glsl'
      ]
    },
    {
      label: 'GameMaker Language',
      values: [
        'gml',
        'gamemakerlanguage'
      ]
    },
    {
      label: 'Go',
      values: [
        'go'
      ]
    },
    {
      label: 'GraphQL',
      values: [
        'graphql'
      ]
    },
    {
      label: 'Groovy',
      values: [
        'groovy'
      ]
    },
    {
      label: 'Haml',
      values: [
        'haml'
      ]
    },
    {
      label: 'Handlebars',
      values: [
        'handlebars'
      ]
    },
    {
      label: 'Haskell',
      values: [
        'haskell',
        'hs'
      ]
    },
    {
      label: 'Haxe',
      values: [
        'haxe'
      ]
    },
    {
      label: 'HCL',
      values: [
        'hcl'
      ]
    },
    {
      label: 'HTTP',
      values: [
        'http'
      ]
    },
    {
      label: 'HTTP Public-Key-Pins',
      values: [
        'hpkp'
      ]
    },
    {
      label: 'HTTP Strict-Transport-Security',
      values: [
        'hsts'
      ]
    },
    {
      label: 'IchigoJam',
      values: [
        'ichigojam'
      ]
    },
    {
      label: 'Icon',
      values: [
        'icon'
      ]
    },
    {
      label: 'Inform 7',
      values: [
        'inform7'
      ]
    },
    {
      label: 'Ini',
      values: [
        'ini'
      ]
    },
    {
      label: 'Io',
      values: [
        'io'
      ]
    },
    {
      label: 'J',
      values: [
        'j'
      ]
    },
    {
      label: 'Java',
      values: [
        'java'
      ]
    },
    {
      label: 'JavaDoc',
      values: [
        'javadoc'
      ]
    },
    {
      label: 'JavaDoc-like',
      values: [
        'javadoclike'
      ]
    },
    {
      label: 'Java stack trace',
      values: [
        'javastacktrace'
      ]
    },
    {
      label: 'Jolie',
      values: [
        'jolie'
      ]
    },
    {
      label: 'JQ',
      values: [
        'jq'
      ]
    },
    {
      label: 'JSDoc',
      values: [
        'jsdoc'
      ]
    },
    {
      label: 'JS Extras',
      values: [
        'js-extras'
      ]
    },
    {
      label: 'JS Templates',
      values: [
        'js-templates'
      ]
    },
    {
      label: 'JSON',
      values: [
        'json'
      ]
    },
    {
      label: 'JSONP',
      values: [
        'jsonp'
      ]
    },
    {
      label: 'JSON5',
      values: [
        'json5'
      ]
    },
    {
      label: 'Julia',
      values: [
        'julia'
      ]
    },
    {
      label: 'Keyman',
      values: [
        'keyman'
      ]
    },
    {
      label: 'Kotlin',
      values: [
        'kotlin'
      ]
    },
    {
      label: 'LaTeX',
      values: [
        'latex',
        'tex',
        'context'
      ]
    },
    {
      label: 'Latte',
      values: [
        'latte'
      ]
    },
    {
      label: 'Less',
      values: [
        'less'
      ]
    },
    {
      label: 'LilyPond',
      values: [
        'lilypond',
        'ly'
      ]
    },
    {
      label: 'Liquid',
      values: [
        'liquid'
      ]
    },
    {
      label: 'Lisp',
      values: [
        'lisp',
        'emacs',
        'elisp',
        'emacs-lisp'
      ]
    },
    {
      label: 'LiveScript',
      values: [
        'livescript'
      ]
    },
    {
      label: 'LOLCODE',
      values: [
        'lolcode'
      ]
    },
    {
      label: 'Lua',
      values: [
        'lua'
      ]
    },
    {
      label: 'Makefile',
      values: [
        'makefile'
      ]
    },
    {
      label: 'Markdown',
      values: [
        'markdown',
        'md'
      ]
    },
    {
      label: 'Markup templating',
      values: [
        'markup-templating'
      ]
    },
    {
      label: 'MATLAB',
      values: [
        'matlab'
      ]
    },
    {
      label: 'MEL',
      values: [
        'mel'
      ]
    },
    {
      label: 'Mizar',
      values: [
        'mizar'
      ]
    },
    {
      label: 'Monkey',
      values: [
        'monkey'
      ]
    },
    {
      label: 'MoonScript',
      values: [
        'moonscript',
        'moon'
      ]
    },
    {
      label: 'N1QL',
      values: [
        'n1ql'
      ]
    },
    {
      label: 'N4JS',
      values: [
        'n4js',
        'n4jsd'
      ]
    },
    {
      label: 'Nand To Tetris HDL',
      values: [
        'nand2tetris-hdl'
      ]
    },
    {
      label: 'NASM',
      values: [
        'nasm'
      ]
    },
    {
      label: 'NEON',
      values: [
        'neon'
      ]
    },
    {
      label: 'nginx',
      values: [
        'nginx'
      ]
    },
    {
      label: 'Nim',
      values: [
        'nim'
      ]
    },
    {
      label: 'Nix',
      values: [
        'nix'
      ]
    },
    {
      label: 'NSIS',
      values: [
        'nsis'
      ]
    },
    {
      label: 'Objective-C',
      values: [
        'objectivec'
      ]
    },
    {
      label: 'OCaml',
      values: [
        'ocaml'
      ]
    },
    {
      label: 'OpenCL',
      values: [
        'opencl'
      ]
    },
    {
      label: 'Oz',
      values: [
        'oz'
      ]
    },
    {
      label: 'PARI/GP',
      values: [
        'parigp'
      ]
    },
    {
      label: 'Parser',
      values: [
        'parser'
      ]
    },
    {
      label: 'Pascal',
      values: [
        'pascal',
        'objectpascal'
      ]
    },
    {
      label: 'Pascaligo',
      values: [
        'pascaligo'
      ]
    },
    {
      label: 'PC-Axis',
      values: [
        'pcaxis',
        'px'
      ]
    },
    {
      label: 'Perl',
      values: [
        'perl'
      ]
    },
    {
      label: 'PHP',
      values: [
        'php'
      ]
    },
    {
      label: 'PHPDoc',
      values: [
        'phpdoc'
      ]
    },
    {
      label: 'PHP Extras',
      values: [
        'php-extras'
      ]
    },
    {
      label: 'PL/SQL',
      values: [
        'plsql'
      ]
    },
    {
      label: 'PowerQuery',
      values: [
        'powerquery',
        'pq',
        'mscript'
      ]
    },
    {
      label: 'PowerShell',
      values: [
        'powershell'
      ]
    },
    {
      label: 'Processing',
      values: [
        'processing'
      ]
    },
    {
      label: 'Prolog',
      values: [
        'prolog'
      ]
    },
    {
      label: '.properties',
      values: [
        'properties'
      ]
    },
    {
      label: 'Protocol Buffers',
      values: [
        'protobuf'
      ]
    },
    {
      label: 'Pug',
      values: [
        'pug'
      ]
    },
    {
      label: 'Puppet',
      values: [
        'puppet'
      ]
    },
    {
      label: 'Pure',
      values: [
        'pure'
      ]
    },
    {
      label: 'Python',
      values: [
        'python',
        'py'
      ]
    },
    {
      label: 'Q (kdb+ database)',
      values: [
        'q'
      ]
    },
    {
      label: 'QML',
      values: [
        'qml'
      ]
    },
    {
      label: 'Qore',
      values: [
        'qore'
      ]
    },
    {
      label: 'R',
      values: [
        'r'
      ]
    },
    {
      label: 'React JSX',
      values: [
        'jsx'
      ]
    },
    {
      label: 'React TSX',
      values: [
        'tsx'
      ]
    },
    {
      label: 'Ren\'py',
      values: [
        'renpy'
      ]
    },
    {
      label: 'Reason',
      values: [
        'reason'
      ]
    },
    {
      label: 'Regex',
      values: [
        'regex'
      ]
    },
    {
      label: 'reST (reStructuredText)',
      values: [
        'rest'
      ]
    },
    {
      label: 'Rip',
      values: [
        'rip'
      ]
    },
    {
      label: 'Roboconf',
      values: [
        'roboconf'
      ]
    },
    {
      label: 'Robot Framework',
      values: [
        'robotframework',
        'robot'
      ]
    },
    {
      label: 'Ruby',
      values: [
        'ruby',
        'rb'
      ]
    },
    {
      label: 'Rust',
      values: [
        'rust'
      ]
    },
    {
      label: 'SAS',
      values: [
        'sas'
      ]
    },
    {
      label: 'Sass (Sass)',
      values: [
        'sass'
      ]
    },
    {
      label: 'Sass (Scss)',
      values: [
        'scss'
      ]
    },
    {
      label: 'Scala',
      values: [
        'scala'
      ]
    },
    {
      label: 'Scheme',
      values: [
        'scheme'
      ]
    },
    {
      label: 'Shell session',
      values: [
        'shell-session'
      ]
    },
    {
      label: 'Smalltalk',
      values: [
        'smalltalk'
      ]
    },
    {
      label: 'Smarty',
      values: [
        'smarty'
      ]
    },
    {
      label: 'Solidity (Ethereum)',
      values: [
        'solidity'
      ]
    },
    {
      label: 'Solution file',
      values: [
        'solution-file',
        'sln'
      ]
    },
    {
      label: 'Soy (Closure Template)',
      values: [
        'soy'
      ]
    },
    {
      label: 'SPARQL',
      values: [
        'sparql',
        'rq'
      ]
    },
    {
      label: 'Splunk SPL',
      values: [
        'splunk-spl'
      ]
    },
    {
      label: 'SQF: Status Quo Function (Arma 3)',
      values: [
        'sqf'
      ]
    },
    {
      label: 'SQL',
      values: [
        'sql'
      ]
    },
    {
      label: 'Stylus',
      values: [
        'stylus'
      ]
    },
    {
      label: 'Swift',
      values: [
        'swift'
      ]
    },
    {
      label: 'TAP',
      values: [
        'tap'
      ]
    },
    {
      label: 'Tcl',
      values: [
        'tcl'
      ]
    },
    {
      label: 'Textile',
      values: [
        'textile'
      ]
    },
    {
      label: 'TOML',
      values: [
        'toml'
      ]
    },
    {
      label: 'Template Toolkit 2',
      values: [
        'tt2'
      ]
    },
    {
      label: 'Turtle',
      values: [
        'turtle',
        'trig'
      ]
    },
    {
      label: 'Twig',
      values: [
        'twig'
      ]
    },
    {
      label: 'TypeScript',
      values: [
        'typescript',
        'ts'
      ]
    },
    {
      label: 'T4 Text Templates (C#)',
      values: [
        't4-cs',
        't4'
      ]
    },
    {
      label: 'T4 Text Templates (VB)',
      values: [
        't4-vb'
      ]
    },
    {
      label: 'T4 templating',
      values: [
        't4-templating'
      ]
    },
    {
      label: 'Vala',
      values: [
        'vala'
      ]
    },
    {
      label: 'VB.Net',
      values: [
        'vbnet'
      ]
    },
    {
      label: 'Velocity',
      values: [
        'velocity'
      ]
    },
    {
      label: 'Verilog',
      values: [
        'verilog'
      ]
    },
    {
      label: 'VHDL',
      values: [
        'vhdl'
      ]
    },
    {
      label: 'vim',
      values: [
        'vim'
      ]
    },
    {
      label: 'Visual Basic',
      values: [
        'visual-basic',
        'vb'
      ]
    },
    {
      label: 'WebAssembly',
      values: [
        'wasm'
      ]
    },
    {
      label: 'Wiki markup',
      values: [
        'wiki'
      ]
    },
    {
      label: 'Xeora',
      values: [
        'xeora',
        'xeoracube'
      ]
    },
    {
      label: 'Xojo (REALbasic)',
      values: [
        'xojo'
      ]
    },
    {
      label: 'XQuery',
      values: [
        'xquery'
      ]
    },
    {
      label: 'YAML',
      values: [
        'yaml',
        'yml'
      ]
    },
    {
      label: 'Zig',
      values: [
        'zig'
      ]
    }
  ];
}
