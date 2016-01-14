import {Component} from 'angular2/core';
import {StaticComponent} from '../static-component/static-component';
import {LoaderComponent} from '../loader-component/loader-component';

@Component({
  selector: 'root',
  directives: [
    StaticComponent,
    LoaderComponent
  ],
  template: `
    <div>
      <s-comp></s-comp>
      <l-comp></l-comp>
      <s-comp></s-comp>
    </div>`
})
export class App {

}
