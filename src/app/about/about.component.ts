import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <p>
      about works!
    </p>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
