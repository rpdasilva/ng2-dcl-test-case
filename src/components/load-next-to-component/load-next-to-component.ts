import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {DynamicComponent} from '../dynamic-component/dynamic-component';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 'lnt-comp',
  directives: [
    ChildComponent
  ],
  template: `
    <h1>dcl.loadNextToLocation component</h1>`
})
export class LoadNextToComponent {
  constructor(dcl: DynamicComponentLoader,
    elementRef: ElementRef) {
    dcl.loadNextToLocation(DynamicComponent, elementRef);
  }
}
