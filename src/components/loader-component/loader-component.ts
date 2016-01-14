import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {DynamicComponent} from '../dynamic-component/dynamic-component';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 'l-comp',
  directives: [
    ChildComponent
  ],
  template: `
    <div>
      <h1>Loader component</h1>
    </div>`
})
export class LoaderComponent {
  constructor(dcl: DynamicComponentLoader,
    elementRef: ElementRef) {
    dcl.loadNextToLocation(DynamicComponent, elementRef);
  }
}
