import {Component, DynamicComponentLoader, ElementRef, Injector} from 'angular2/core';
import {DynamicComponent} from '../dynamic-component/dynamic-component';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 'lar-comp',
  directives: [
    ChildComponent
  ],
  template: `
    <div class="wrapper">
      <h1>dcl.loadAsRoot component</h1>
      <div id="anchor"></div>
    </div>`
})
export class LoadAsRootComponent {
  constructor(dcl: DynamicComponentLoader,
    elementRef: ElementRef,
    injector: Injector) {
    dcl.loadAsRoot(DynamicComponent, '#anchor', null);
  }
}
