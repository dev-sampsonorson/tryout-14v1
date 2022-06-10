import { CommonModule } from '@angular/common';
import { Component, Inject, InjectionToken } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CrazyService } from './crazy.service';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { IService } from './iservice';
import { ParentComponent } from './parent/parent.component';
import { TestService } from './test.service';


const SERVICE_TOKEN = new InjectionToken<any>('SERVICE_TOKEN');

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, ParentComponent, ChildComponent, GrandchildComponent],
  providers: [
    { provide: SERVICE_TOKEN, useClass: TestService }
  ],
  selector: 'app-root',
  template: `
    <!-- <pre>{{ service.serviceMessage }}</pre> -->
    <app-parent>
      <!-- <app-grandchild></app-grandchild> -->
      <app-child></app-child>
    </app-parent>
    <router-outlet></router-outlet>
  `,
  styles: [''],
})
export class AppComponent {

  testMessage = '';
  crazyMessage = '';

  constructor(
    @Inject(SERVICE_TOKEN) public service: IService,
  ) {
  }
}
