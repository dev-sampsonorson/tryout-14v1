import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, InjectionToken, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { GrandchildComponent } from '../grandchild/grandchild.component';

export const COMPONENT_TOKEN = new InjectionToken<any>('COMPONENT_TOKEN');

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-parent',
  template: `
    <p>
      parent works!
    </p>
    <!-- <ng-container #container></ng-container> -->
    <ng-content></ng-content>
  `,
  styles: [`
   :host {
     display: block;
     border: 1px solid red;
   }
  `
  ]
})
export class ParentComponent implements OnInit, AfterViewInit {

  @ViewChild('container', { static: true, read: ViewContainerRef })
  container!: ViewContainerRef;

  @ContentChild(COMPONENT_TOKEN, { static: true })
  child!: any;

  constructor() { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log('child => ', this.child);

  }

}
