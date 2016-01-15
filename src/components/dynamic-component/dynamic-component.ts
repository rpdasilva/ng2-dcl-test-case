import {Component, ChangeDetectorRef} from 'angular2/core';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 'd-comp',
  directives: [
    ChildComponent
  ],
  template: `
    <div class="wrapper">
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
  constructor(private cdr: ChangeDetectorRef) {
    // When dcl.loadAsRoot is used, change detection needs to manually be called
    // See: https://github.com/angular/angular/issues/6223
    // setTimeout(() => {
    //   cdr.detectChanges();
    // });
  }
}
