import { Router } from '@angular/router';
import { Component, Injectable, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class AppComponent {
  isLoading: boolean;

  constructor() {
    this.isLoading = false;
    // TODO: set loading to true based on event raised by child components
  }
}
