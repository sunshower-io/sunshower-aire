import {useView} from 'aurelia-framework';
import {PLATFORM}  from "aurelia-pal";

export function view(path: string) {
  return useView(PLATFORM.moduleName(path) + '.pug');
}
