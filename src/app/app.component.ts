import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} from electron</h1>`,
})
export class AppComponent  { name = 'Angular'; }
