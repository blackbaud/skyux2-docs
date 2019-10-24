import {
  NgModule
} from '@angular/core';

import {
  SkyAngularTreeModule
} from '@skyux/angular-tree-component';

import {
  TreeModule
} from 'angular-tree-component';

import {
  SkyFluidGridModule
} from '@skyux/layout';

// Build will crash if we try to insert function calls inside the NgModule decorator.
// To get around this, we just use a variable to refer to the .forRoot() function call.
// https://github.com/angular/angular/issues/23609
const treeModuleForRoot = TreeModule.forRoot();

@NgModule({
  imports: [
    SkyAngularTreeModule,
    SkyFluidGridModule,
    treeModuleForRoot
  ],
  exports: [
    SkyAngularTreeModule,
    TreeModule
  ]
})
export class SkyAngularTreeViewDemoModule { }
