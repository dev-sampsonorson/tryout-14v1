import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
