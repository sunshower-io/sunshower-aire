/**
 * @author    : Adarsh Pastakia
 * @version   : 5.0.0
 * @copyright : 2019
 * @license   : MIT
 */

import {bindable, customElement, inlineView, useView} from "aurelia-framework";
import {PLATFORM}                                     from 'aurelia-framework';
// import {view}                                         from "../core/view";
import {UIContent}                                    from "./ui-content";
import {UISection}                                    from "./ui-section";
import {UISectionFoot}                                from "./ui-section-foot";
import {UISectionHead}                                from "./ui-section-head";

@customElement("ui-page")
@inlineView(`<template class="ui-page au-animate animate-slide-in-right animate-slide-out-left" role="main">
  <div class="ui-page__title" if.bind="pageTitle">\${pageTitle}</div>
  <h1>fuck</h1>
  <slot name="page-alert"></slot>
  <div class="ui-page__body"><slot></slot></div>
</template>`)
// @useView(PLATFORM.moduleName('aire/page/ui-page.pug'))
// @view('aire/page/ui-page')
class UIPage {
  @bindable()
  public pageTitle : string = "";
}

export const Page = [UIPage, UISection, UISectionHead, UISectionFoot, UIContent];
