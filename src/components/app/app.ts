import {Component} from 'angular2/core';
import {StaticComponent} from '../static-component/static-component';
import {LoadNextToComponent} from '../load-next-to-component/load-next-to-component';
import {LoadIntoComponent} from '../load-into-component/load-into-component';
import {LoadAsRootComponent} from '../load-as-root-component/load-as-root-component';

@Component({
  selector: 'root',
  directives: [
    StaticComponent,
    LoadNextToComponent,
    LoadIntoComponent,
    LoadAsRootComponent
  ],
  template: `
    <div>
      <s-comp></s-comp>
      <div class="wrapper">
        <lnt-comp></lnt-comp>
      </div>
      <li-comp></li-comp>
      <lar-comp></lar-comp>
      <s-comp></s-comp>
    </div>`
})
export class App {

}
