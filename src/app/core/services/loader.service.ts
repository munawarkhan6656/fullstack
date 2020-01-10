import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
  isLoading: Subject<boolean>;
  constructor() {
    this.isLoading = new Subject<boolean>();
  }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

  showLoader(): Observable<boolean> {
    return this.isLoading;
  }
}
