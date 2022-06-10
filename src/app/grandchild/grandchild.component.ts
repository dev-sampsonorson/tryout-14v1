import { Component, OnInit } from '@angular/core';
import { COMPONENT_TOKEN } from '../parent/parent.component';

@Component({
standalone: true,
  selector: 'app-grandchild',
  providers: [
    { provide: COMPONENT_TOKEN, useExisting: GrandchildComponent }
  ],
  template: `
    <p>
      grandchild works!
    </p>
  `,
  styles: [
  ]
})
export class GrandchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
