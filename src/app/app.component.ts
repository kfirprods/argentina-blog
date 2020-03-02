import { LoadingService } from './services/loading.service';
import { Router } from '@angular/router';
import { Component, Injectable, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class AppComponent {
  isLoading: boolean;

  constructor(private loadingService: LoadingService) {
    this.loadingService.loadingChangedEvent.subscribe(value => {
      setTimeout(() => {
        this.isLoading = value;
      });
    });
  }

  onActivate(event) {
    window.scroll(0, 0);
  }
}
