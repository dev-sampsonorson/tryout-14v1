import { Component, OnInit } from '@angular/core';
import { COMPONENT_TOKEN } from '../parent/parent.component';

@Component({
  standalone: true,
  providers: [
    { provide: COMPONENT_TOKEN, useExisting: ChildComponent }
  ],
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
