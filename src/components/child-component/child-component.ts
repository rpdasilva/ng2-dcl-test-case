import {Component} from 'angular2/core';

@Component({
  selector: 'c-comp',
  template: `
    <h2>Loaded component: <span>{{componentType}}</span></h2>`,
  styles: [
    `
      span {
        color: #00F;
      }
    `
  ]
})
export class ChildComponent {
  public componentType: string = 'Child';

  constructor() {
    setTimeout(() => this.componentType = 'CD Fired', 1500);
  }
}
