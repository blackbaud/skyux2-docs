import {
  Component,
  ViewChild
} from '@angular/core';

import {
  ITreeOptions,
  ITreeState,
  TreeModel,
  TreeNode
} from 'angular-tree-component';

@Component({
  selector: 'sky-angular-tree-view-demo',
  styles: [`
    .sky-demo-container {
      border: 1px solid #cdcfd2;
      padding: 20px;

      .angular-tree-component {
        background: #fff;
      }
    }`
  ],
  templateUrl: './angular-tree-view-demo.component.html'
})
export class SkyAngularTreeViewDemoComponent {

  // #region [For demonstration purposes only.]
  public set enableCascading(value: boolean) {
    this.resetSelection();
    this.treeOptions.useTriState = value;
    this._enableCascading = value;

    if (value) {
      this.selectLeafNodesOnly = false;
    }
  }

  public get enableCascading(): boolean {
    return this._enableCascading;
  }

  public set selectLeafNodesOnly(value: boolean) {
    console.log(value);
    this.resetSelection();
    this._selectLeafNodesOnly = value;

    if (value) {
      this.enableCascading = false;
    }
  }

  public get selectLeafNodesOnly(): boolean {
    return this._selectLeafNodesOnly;
  }

  public set selectSingle(value: boolean) {
    this.resetSelection();
    this._selectSingle = value;

    if (value) {
      this.enableCascading = false;
    }
  }

  public get selectSingle(): boolean {
    return this._selectSingle;
  }

  public set enableSelection(value: boolean) {
    this.resetSelection();
    this.treeOptions.useCheckbox = value;
    this._enableSelection = value;
    this.selectLeafNodesOnly = false;
    this.selectSingle = false;
    this.enableCascading = false;
  }

  public get enableSelection(): boolean {
    return this._enableSelection;
  }

  public set readOnly(value: boolean) {
    this.resetSelection();
    this.enableSelection = false;
    this._readOnly = value;
  }

  public get readOnly(): boolean {
    return this._readOnly;
  }

  public set showContextMenus(value: boolean) {
    this._showContextMenus = value;
  }

  public get showContextMenus(): boolean {
    return this._showContextMenus;
  }

  public set showToolbar(value: boolean) {
    this._showToolbar = value;
  }

  public get showToolbar(): boolean {
    return this._showToolbar;
  }
  // #endregion

  public treeOptions: ITreeOptions = {
    animateExpand: true,
    useTriState: false
  };

  public dropdownItems: any = [
    { name: 'Insert an item at this level', disabled: false },
    { name: 'Insert an item under this level', disabled: false },
    { name: 'Move up', disabled: false },
    { name: 'Move down', disabled: false },
    { name: 'Move left', disabled: false },
    { name: 'Move right', disabled: false },
    { name: 'Edit', disabled: false },
    { name: 'Delete', disabled: false }
  ];

  public nodes: any[] = [
    {
      name: 'Animals',
      isExpanded: true,
      children: [
        { name: 'Cats', isExpanded: true, children: [
          { name: 'Burmese' },
          { name: 'Persian' },
          { name: 'Tabby' }
          ]
        },
        { name: 'Dogs', isExpanded: true, children: [
          { name: 'Beagle' },
          { name: 'German Shepard' },
          { name: 'Labrador Retriever' }
          ]
        }
      ]
    }
  ];

  @ViewChild(TreeModel)
  private tree: TreeModel;

  // #region [For demonstration purposes only.]
  private _enableCascading = false;

  private _enableSelection = false;

  private _readOnly = false;

  private _selectLeafNodesOnly = false;

  private _showContextMenus = false;

  private _showToolbar = false;

  private _selectSingle = false;
  // #endregion

  public actionClicked(name: string, node: TreeNode): void {
    console.log(name + `: "${node.data.name}"`);
  }

  public onTreeStateChange(treeModel: ITreeState): void {
    console.log(treeModel);
  }

  private resetSelection(): void {
    this.tree.selectedLeafNodeIds = {};
    this.tree.activeNodeIds = {};
  }
}
