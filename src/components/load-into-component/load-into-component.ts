import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {DynamicComponent} from '../dynamic-component/dynamic-component';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 'li-comp',
  directives: [
    ChildComponent
  ],
  template: `
    <div class="wrapper">
      <h1>dcl.loadIntoLocation component</h1>
      <div #anchor></div>
    </div>`
})
export class LoadIntoComponent {
  constructor(private dcl: DynamicComponentLoader,
    private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.dcl.loadIntoLocation(DynamicComponent, this.elementRef, 'anchor');
  }
}
