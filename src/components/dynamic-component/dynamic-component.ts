import {Component} from 'angular2/core';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 'd-comp',
  directives: [
    ChildComponent
  ],
  template: `
    <div>
      <h1>Dynamically loaded component</h1>
      <c-comp></c-comp>
      <c-comp></c-comp>
    </div>`,
  styles: [
    `
      h1 {
        color: #F00;
      }
    `
  ]
})
export class DynamicComponent {

}
