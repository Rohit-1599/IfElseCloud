import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  $loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public load(): void {
    this.$loader.next(true);
  }

  public stop(): void {
    this.$loader.next(false);
  }
}
