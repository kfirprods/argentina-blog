import { BehaviorSubject } from 'rxjs';
import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  @Output()
  loadingChangedEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isLoading = false;

  changeIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
    this.loadingChangedEvent.next(isLoading);
  }
}
