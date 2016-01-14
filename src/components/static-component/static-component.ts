import {Component} from 'angular2/core';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 's-comp',
  directives: [
    ChildComponent
  ],
  template: `
    <div>
      <h1>Static component</h1>
      <c-comp></c-comp>
      <c-comp></c-comp>
    </div>`
})
export class StaticComponent {

}
