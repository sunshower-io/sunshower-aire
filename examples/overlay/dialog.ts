/**
 * @author    : Adarsh Pastakia
 * @version   : 5.0.0
 * @copyright : 2019
 * @license   : MIT
 */
import { autoinject } from "aurelia-framework";
import { UIDialogService } from "sunshower-aire";
import { DlgTester } from "./dlgTester";

@autoinject()
export class DialogPage {
  protected dialogHtml = `<template>
  <ui-dialog label="My Dialog" help="true">
    <ui-content ui-scroll ui-padding>
      <lipsum-para></lipsum-para>
    </ui-content>
  </ui-dialog>
</template>`;
  protected dialogJs = `import { UIDialogService } from "sunshower-aire";

@autoinject()
export class MyDialog {
  
}`;
  protected pageJs = `import { UIDialogService } from "sunshower-aire";
import { MyDialog } from "./dialog";

@autoinject()
export class PageVm {
  constructor(private dialogService: UIDialogService) {}

  fn() {
    this.dialogService.open(MyDialog);
  }
}`;

  constructor(private dialogService: UIDialogService) {}

  protected openDialog() {
    this.dialogService.open(DlgTester);
  }
}
