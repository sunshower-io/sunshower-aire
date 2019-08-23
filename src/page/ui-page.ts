
import {bindable, customElement, inlineView, useView} from "aurelia-framework";
import {view}                                         from "aire/core/view";
import {UIContent}                                    from "./ui-content";
import {UISection}                                    from "./ui-section";
import {UISectionFoot}                                from "./ui-section-foot";
import {UISectionHead}                                from "./ui-section-head";

@customElement("ui-page")
@view('aire/page/ui-page')
class UIPage {
  @bindable()
  public pageTitle : string = "";
}

export const Page = [UIPage, UISection, UISectionHead, UISectionFoot, UIContent];
